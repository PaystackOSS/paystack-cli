const helpers = require('../lib/helpers')
const Paystack = require('../lib/Paystack')
const init = function(){
    vorpal.command('login', 'Sign in with your Paystack username and password').action(async function (args, callback) {
        let email = helpers.prompt('Email address\n')
        let password = helpers.prompt('Password\n', true)
      
        let [e, response] = await helpers.promiseWrapper(Paystack.signIn(email, password))
        if (response) {
          helpers.successLog('Login successful')
          db.write('token', response.token)
          db.write('user', response.user)
          var [err, integration] = await helpers.promiseWrapper(Paystack.selectIntegration(response.user.integrations, response.token))
          if (err) {
            helpers.errorLog(err)
          }
          db.write('selected_integration', integration);
          var [err, keys] = await helpers.promiseWrapper(Paystack.getKeys(response.token));
          if (err) {
            helpers.errorLog(err)
            return
          }
          db.write('selected_integration.keys', keys)
          helpers.infoLog('Logged in as ' + email + ' -  ' + integration.business_name + ' (' + integration.id + ')');
        }else{
          helpers.errorLog('Login failed')
      
        }
      })
}

module.exports = init