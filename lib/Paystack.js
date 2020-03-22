
const axios = require('axios');
const helpers = require('./helpers')

function selectIntegration(integrations, token) {
    return new Promise((resolve, reject) => {
      console.log('Choose an integration - ');
      let promptMessage = ""
  
      integrations.forEach((b, i) => {
        promptMessage += i + 1 + ' - ' + b.business_name + ' (' + b.id + ')\n'
      })
      let integration = helpers.prompt(promptMessage + '\nEnter the corresponding number - ');
  
      axios.post('https://api.paystack.co/user/switch_integration', { integration: integrations[parseInt(integration) - 1].id }, { headers: { 'Authorization': 'Bearer ' + token, 'jwt-auth': true } }).then((response) => {
  
        resolve(integrations[parseInt(integration) - 1])
      }).catch((err) => {
        console.error(err.response.data)
        reject(err)
      })
  
    })
  
  }
  
  function setWebhook(url, token, integration, domain = 'test') {
    return new Promise((resolve, reject) => {
      let data = {};
      data[domain + '_webhook_endpoint'] = url;
      data['integration'] = integration
      let headers = {
        'Authorization': 'Bearer ' + token,
        'jwt-auth': true
      }
      axios.put('https://api.paystack.co/integration/webhooks', data, { headers }).then((resp) => {
        resolve(resp.data.message)
      }).catch((err) => {
        console.log(err.response.data)
        reject(err)
      })
    })
  }
  
  function getKeys(token) {
    return new Promise((resolve, reject) => {
      axios.get("https://api.paystack.co/integration/keys", { headers: { 'Authorization': 'Bearer ' + token, 'jwt-auth': true } }).then((response) => {
  
        resolve(response.data.data)
      }).catch((err) => {
        reject(err.response.data.message);
      });
    })
  }
  
  
  
  function signIn(email, password) {
    return new Promise((resolve, reject) => {
      let expiry = parseInt(db.read('token_expiry'));
      let now = parseFloat( Date.now().toString() )
      if(expiry > now){
        resolve({
          token: db.read('token'),
          user:db.read('user'),
        })
        return;
      }
      helpers.infoLog('Logging in');
      axios({
        url: 'https://api.paystack.co/login',
        method: 'POST',
        data: { email, password }
      }).then((response) => {
  
        db.write('token', response.data.data.token)
        db.write('token_expiry', response.data.data.expiry)
        db.write('user', response.data.data.user)
        resolve(response.data.data)
      }).catch((e) => {
        helpers.errorLog(e.response.data.message || 'Unable to sign in, please try again in a few minutes');
        reject( 'LOGIN ERROR: '+ e.response.data.message)
      })
  
    })
  }
  
module.exports = {
signIn, getKeys, setWebhook, selectIntegration
}