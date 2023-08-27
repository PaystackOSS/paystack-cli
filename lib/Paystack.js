import axios from 'axios';
import * as helpers from './helpers.js';
import crypto from 'crypto';
import webhookSamples from './paystack/webhooks.js';

export function selectIntegration(integrations, token) {
  return new Promise((resolve, reject) => {
    console.log('Choose an integration - ');
    let promptMessage = '';

    integrations.forEach((b, i) => {
      promptMessage += i + 1 + ' - ' + b.business_name + ' (' + b.id + ')\n';
    });
    let integration = helpers.prompt(
      promptMessage + '\nEnter the corresponding number - '
    );

    axios
      .post(
        'https://api.paystack.co/user/switch_integration',
        { integration: integrations[parseInt(integration) - 1].id },
        { headers: { Authorization: 'Bearer ' + token, 'jwt-auth': true } }
      )
      .then((response) => {
        resolve(integrations[parseInt(integration) - 1]);
      })
      .catch((err) => {
        console.error(err.response.data);
        reject(err);
      });
  });
}

export async function refreshIntegration() {
  const user_role = db.read('selected_integration.logged_in_user_role');
  const integration = db.read('selected_integration');
  let token = '';
  const expiry = parseInt(db.read('token_expiry')) * 1000;
  const now = parseFloat(Date.now().toString());

  if (expiry > now) {
    token = db.read('token');
    return true;
  } else {
    const password = helpers.prompt(
      "What's your password: (" + db.read('user.email') + ') ' + '\n>',
      true
    );
    const [err, result] = await helpers.promiseWrapper(
      signIn(db.read('user.email'), password)
    );
    if (err || !result) {
      return false;
    }
    token = result.data.token;
  }

  const [err, integrationData] = await helpers.promiseWrapper(
    getIntegration(integration.id, token)
  );

  if (err) {
    helpers.errorLog(err);
    return false;
  }
  integrationData.logged_in_user_role = user_role;
  db.write('selected_integration', integrationData);
}

export function setWebhook(url, token, integration, domain = 'test') {
  return new Promise((resolve, reject) => {
    let data = {};
    data[domain + '_webhook_endpoint'] = url;
    data['integration'] = integration;
    let headers = {
      Authorization: 'Bearer ' + token,
      'jwt-auth': true,
    };
    axios
      .put('https://api.paystack.co/integration/webhooks', data, { headers })
      .then((resp) => {
        resolve(resp.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
        reject(err);
      });
  });
}

export function getKeys(token, type = 'secret', domain = 'test') {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.paystack.co/integration/keys', {
        headers: { Authorization: 'Bearer ' + token, 'jwt-auth': true },
      })
      .then((response) => {
        let key = {};
        let keys = response.data.data;
        if (keys.length) {
          for (let i = 0; i < keys.length; i++) {
            if (keys[i].domain === domain && keys[i].type === type) {
              key = keys[i];
              break;
            }
          }
        }
        resolve(key.key);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response.data.message);
          return;
        }
        reject(error);
      });
  });
}

export function pingWebhook(args) {
  return new Promise(async (resolve, reject) => {
    let canProceed;
    try {
      canProceed = await refreshIntegration();
    } catch (e) {
      console.error(e);
    }
    if (!canProceed) {
      helpers.errorLog(
        '- - - - - - - - Unable to ping webhook URL - - - - - - - -'
      );
      return;
    }
    let domain = 'test';
    if (args.options.domain) {
      domain = args.options.domain;
    }
    let event = 'charge.success';
    if (args.options.event) {
      event = args.options.event;
    }
    let eventObject = webhookSamples[event];
    if (eventObject) {
      let token = db.read('token');
      let key = await getKeys(token, 'secret', domain);
      var hash = crypto
        .createHmac('sha512', key)
        .update(JSON.stringify(eventObject))
        .digest('hex');
      let uri = db.read('selected_integration.' + domain + '_webhook_endpoint');
      helpers.infoLog(
        '-  - - - - - - -  - - -  - - - -   - - - - -  - - - - - - - - '
      );
      helpers.infoLog(`Sending sample ${event} event payload to ${uri}`);
      axios
        .post(uri, eventObject, {
          headers: {
            'x-paystack-signature': hash,
          },
        })
        .then((response) => {
          resolve({
            code: response.status,
            text: response.statusText,
            data: response.data,
          });
        })
        .catch((e) => {
          resolve({
            code: e.response.status,
            text: e.response.statusText,
            data: e.response.data,
          });
        });
    } else {
      helpers.errorLog('Invalid event type - ' + event);
      reject();
    }
  });
}

export function getIntegration(id, token) {
  console.log('getting integration');
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.paystack.co/integration/' + id, {
        headers: {
          Authorization: 'Bearer ' + token,
          'jwt-auth': true,
        },
      })
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((e) => {
        console.error(e);
        reject(e.response.data.message);
      });
  });
}

export async function signIn(email, password) {
  helpers.infoLog('Logging in');
  try {
    const __response = await axios({
      url: 'https://api.paystack.co/login',
      method: 'POST',
      data: { email, password },
    });

    const response = __response.data;

    if (response && response.data && !response.data.mfa_required) {
      helpers.successLog('Login successful');
      return response;
    } else if (response && response.data && response.data.mfa_required) {
      const totp = helpers.prompt(
        '*MFA required* Enter 6-digit verification code\n'
      );

      const [e, payload] = await helpers.promiseWrapper(
        verifyMfa(totp, response.data.token)
      );

      if (payload) {
        helpers.successLog('Login successful');
        return payload;
      }
    } else {
      helpers.errorLog('Login failed');
    }
  } catch (e) {
    helpers.errorLog(
      e.response?.data?.message ||
        'Unable to sign in, please try again in a few minutes'
    );
  }
}

export function verifyMfa(totp, token) {
  return new Promise((resolve, reject) => {
    helpers.infoLog('Verifying MFA...');
    axios({
      url: 'https://api.paystack.co/verify-mfa',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'jwt-auth': true,
      },
      data: { totp },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        helpers.errorLog(
          e.response.data.message ||
            'Unable to verify MFA, please try again in a few minutes'
        );
        reject('VERIFY MFA ERROR: ' + e.response.data.message);
      });
  });
}

export function storeLoginDetails(payload) {
  db.write('token', payload.data.token);
  db.write('token_expiry', payload.data.expiry);
  db.write('user', payload.data.user);
}
