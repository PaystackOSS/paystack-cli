const axios = require('axios');
const helpers = require('./helpers');
const crypto = require('crypto');
const webhookSamples = require('./paystack/webhooks');
function selectIntegration(integrations, token) {
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

async function refreshIntegration() {
  let user_role = db.read('selected_integration.logged_in_user_role');
  let integration = db.read('selected_integration');
  let token = '';
  let expiry = parseInt(db.read('token_expiry')) * 1000;
  let now = parseFloat(Date.now().toString());

  if (expiry > now) {
    token = db.read('token');
    return true;
  } else {
    let password = helpers.prompt(
      "What's your password: (" + db.read('user.email') + ') ' + '\n>',
      true
    );
    var [err, result] = await helpers.promiseWrapper(
      signIn(db.read('user.email'), password)
    );
    if (!result) {
      return false;
    }
    token = result.token;
  }
  var [err, integrationData] = await helpers.promiseWrapper(
    getIntegration(integration.id, token)
  );
  if (err) {
    helpers.errorLog(err);
    return false;
  }
  integrationData.logged_in_user_role = user_role;
  db.write('selected_integration', integrationData);
}

function setWebhook(url, token, integration, domain = 'test') {
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

function getKeys(token, type = 'secret', domain = 'test') {
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

function pingWebhook(args) {
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

function getIntegration(id, token) {
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

function signIn(email, password) {
  return new Promise((resolve, reject) => {
    let expiry = parseInt(db.read('token_expiry'));
    let now = parseFloat(Date.now().toString());
    if (expiry > now) {
      resolve({
        token: db.read('token'),
        user: db.read('user'),
      });
      return;
    }
    helpers.infoLog('Logging in');
    axios({
      url: 'https://api.paystack.co/login',
      method: 'POST',
      data: { email, password },
    })
      .then(async (response) => {
        response = response.data.data;
        if (response && !response.mfa_required) {
          token = response.token;
          user = response.user;
          db.write('token', token);
          db.write('user', user);

          helpers.successLog('Login successful');
          resolve(response);
        } else if (response && response.mfa_required) {
          var totp = helpers.prompt(
            '*MFA required* Enter 6-digit verification code\n'
          );
          var [e, response] = await helpers.promiseWrapper(
            verifyMfa(totp, response.token)
          );
          if (response) {
            token = response.token;
            user = response.user;
            db.write('token', token);
            db.write('user', user);

            helpers.successLog('Login successful');
            resolve(response);
          }
        } else {
          helpers.errorLog('Login failed');
          return;
        }
      })
      .catch((e) => {
        helpers.errorLog(
          e.response.data.message ||
            'Unable to sign in, please try again in a few minutes'
        );
        reject('LOGIN ERROR: ' + e.response.data.message);
      });
  });
}
function verifyMfa(totp, token) {
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
        storeLoginDetails(response.data);
        resolve(response.data.data);
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

function storeLoginDetails(payload) {
  db.write('token', payload.data.token);
  db.write('token_expiry', payload.data.expiry);
  db.write('user', payload.data.user);
}

module.exports = {
  signIn,
  verifyMfa,
  getKeys,
  setWebhook,
  selectIntegration,
  getIntegration,
  pingWebhook,
  refreshIntegration,
};
