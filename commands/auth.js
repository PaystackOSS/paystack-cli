import * as helpers from '../lib/helpers.js';
import * as Paystack from '../lib/Paystack.js';

const init = () => {
  vorpal
    .command('login', 'Sign in with your Paystack username and password')
    .action(async (_args, _callback) => {
      let token, user;
      let expiry = parseInt(db.read('token_expiry')) * 1000;
      let now = parseFloat(Date.now().toString());
      if (expiry > now) {
        token = db.read('token');
        user = db.read('user');
        helpers.successLog("You're already logged in");
        return;
      } else {
        const email = helpers.prompt('Email address\n');
        const password = helpers.prompt('Password\n', true);

        const [e, response] = await helpers.promiseWrapper(
          Paystack.signIn(email, password),
        );

        if (response && response.data) {
          Paystack.storeLoginDetails(response);
          token = response.data.token;
          user = response.data.user;
        }
      }

      if (token && user) {
        const [err, integration] = await helpers.promiseWrapper(
          Paystack.selectIntegration(user.integrations, token),
        );
        if (err) {
          helpers.errorLog(err);
        } else {
          db.write('selected_integration', integration);
          let user_role = db.read('selected_integration').logged_in_user_role;
          const [err, integrationData] = await helpers.promiseWrapper(
            Paystack.getIntegration(integration.id, token),
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
              ')',
          );
        }
      } else {
        helpers.errorLog(' - -  - - -  - ');
      }
    });
};

export default init;
