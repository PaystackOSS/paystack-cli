import * as helpers from '../lib/helpers.js';
import * as Paystack from '../lib/Paystack.js';

const init = function () {
  vorpal
    .command('login', 'Sign in with your Paystack username and password')
    .action(async function (args, callback) {
      let token = '';
      let expiry = parseInt(db.read('token_expiry')) * 1000;
      let now = parseFloat(Date.now().toString());
      let user;
      if (expiry > now) {
        token = db.read('token');
        user = db.read('user');
        helpers.successLog("You're already logged in");
      } else {
        var email = helpers.prompt('Email address\n');
        let password = helpers.prompt('Password\n', true);
        var [e, response] = await helpers.promiseWrapper(
          Paystack.signIn(email, password)
        );

        if (response && !response.mfa_required) {
          token = response.token;
          user = response.user;
          db.write('token', token);
          db.write('user', user);
          helpers.successLog('Login successful');
        } else if (response && response.mfa_required) {
          var totp = helpers.prompt(
            '*MFA required* Enter 6-digit verification code\n'
          );
          var [e, response] = await helpers.promiseWrapper(
            Paystack.verifyMfa(totp, response.token)
          );
          if (response) {
            token = response.token;
            user = response.user;
            db.write('token', token);
            db.write('user', user);
            helpers.successLog('Login successful');
          }
        } else {
          helpers.errorLog('Login failed');
          return;
        }
      }
      if (response || (token && user)) {
        var [err, integration] = await helpers.promiseWrapper(
          Paystack.selectIntegration(user.integrations, token)
        );
        if (err) {
          helpers.errorLog(err);
        }
        db.write('selected_integration', integration);
        let user_role = db.read('selected_integration.logged_in_user_role');
        var [err, integrationData] = await helpers.promiseWrapper(
          Paystack.getIntegration(integration.id, token)
        );
        if (err) {
          helpers.errorLog(err);
          return;
        }
        integrationData.logged_in_user_role = user_role;
        db.write('selected_integration', integrationData);
        helpers.infoLog(
          'Logged in as ' +
            user.email +
            ' -  ' +
            integration.business_name +
            ' (' +
            integration.id +
            ')'
        );
      } else {
        helpers.errorLog(' - -  - - -  - ');
      }
    });
};

export default init;
