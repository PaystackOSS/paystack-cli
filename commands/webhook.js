import * as tunnel from '../lib/tunnel.js';
import * as helpers from '../lib/helpers.js';
import * as Paystack from '../lib/Paystack.js';

const init = () => {
  vorpal
    .command(
      'webhook <command> [local_route]',
      'runs a webhook endpoint health check and listens for incoming webhooks".',
    )
    .option('--domain  <value>', '  ')
    .option('--event  <value>', '  ')
    .validate(function (args) {
      let selected_integration = db.read('selected_integration').id;
      let user = db.read('user').id;
      if (!selected_integration || !user) {
        helpers.errorLog(
          "You're not signed in, please run the `login` command before you begin",
        );
        return false;
      }
    })
    .action(async function (args, callback) {
      if (args.command == 'listen') {
        let token = '';
        let expiry = parseInt(db.read('token_expiry')) * 1000;
        let now = parseFloat(Date.now().toString());

        if (expiry > now) {
          token = db.read('token');
        } else {
          let password = helpers.prompt(
            "What's your paystack password:\n>",
            true,
          );
          var [err, result] = await helpers.promiseWrapper(
            Paystack.signIn(db.read('user').email, password),
          );
          if (!result) {
            return;
          }
          token = result.token;
        }

        if (!args.local_route) {
          helpers.errorLog(
            'To listen to webhook events locally, you have to specify a local url to forward events to e.g localhost:3000/webhook',
          );
          return;
        }
        let urlObject = helpers.parseURL(args.local_route);

        if (!urlObject.port) {
          urlObject.port = 8080;
        }
        if (!urlObject.search || urlObject.search == '?') {
          urlObject.search = '';
        }

        let targetHost = `${urlObject.protocol || 'http:'}//${urlObject.hostname || 'localhost'}:${urlObject.port}`;
        helpers.infoLog(`Establishing zero-config tunnel to ${targetHost}...`);

        let tunnelInstance;
        try {
          tunnelInstance = await tunnel.startTunnel(targetHost);
        } catch (e) {
          helpers.errorLog('Failed to start tunnel: ' + (e.message || e));
          return;
        }

        let tunnelURL = tunnelInstance.url;
        let webhookURL = tunnelURL + (urlObject.pathname || '') + (urlObject.search || '');
        let domain = 'test';
        if (args.options.domain == 'live') {
          domain = 'live';
        }
        helpers.infoLog(`Tunnel URL: ${tunnelURL}`);
        helpers.infoLog('Tunneling webhook events to ' + args.local_route);
        var [err, result] = await helpers.promiseWrapper(
          Paystack.setWebhook(
            webhookURL,
            token,
            db.read('selected_integration').id,
            domain,
          ),
        );
        if (err) {
          this.log(err);
          return;
        } else {
          let selected = db.read('selected_integration');
          if (selected) {
            selected[domain + '_webhook_endpoint'] = webhookURL;
            db.write('selected_integration', selected);
          }
          this.log(
            'Webhook events will now be received at ' + args.local_route,
          );
        }
      } else if (args.command == 'ping') {
        await helpers.promiseWrapper(Paystack.refreshIntegration(args));

        var [e, response] = await helpers.promiseWrapper(
          Paystack.pingWebhook(args),
        );
        helpers.infoLog('-  - - - - WEBHOOK RESPONSE - - - -  - -');
        helpers.infoLog(response.code + ' - - ' + response.text);
        if (helpers.isJson(response.data)) {
          helpers.jsonLog(response.data);
        } else {
          helpers.infoLog(response.data);
        }
      }

      callback();
    });
};

export default init;
