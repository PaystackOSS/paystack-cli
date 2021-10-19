
const axios = require('axios');
const helpers = require('./helpers')
const crypto = require('crypto')
const webhookSamples = require('./paystack/webhooks')
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

async function refreshIntegration(){

    let user_role = db.read('selected_integration.logged_in_user_role');
    let integration = db.read('selected_integration')
    let token = ''
    let expiry = parseInt(db.read('token_expiry'))*1000;
    let now =parseFloat( Date.now().toString() )

    if (expiry > now) {

        token = db.read('token')
        return true;
    } else {
        let password = helpers.prompt("What's your password: ("+ db.read('user.email') +') '+"\n>", true)
        var [err, result] = await helpers.promiseWrapper(signIn(db.read('user.email'), password));
        if (!result) {
            return false
        }
        token = result.token
    }
    var [err, integrationData] = await helpers.promiseWrapper(getIntegration(integration.id, token));
    if (err) {
        helpers.errorLog(err)
        return false
    }
    integrationData.logged_in_user_role = user_role;
    db.write('selected_integration', integrationData);
    var [err, keys] = await helpers.promiseWrapper(getKeys(token));
    if (err) {
        helpers.errorLog(err)
        return false
    }
    db.write('selected_integration.keys', keys)

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

function pingWebhook(args) {
    return new Promise(async (resolve, reject) => {
        let canProceed;
        try{
           canProceed =  await refreshIntegration();
        }catch(e){
            console.error(e)
        }
        if(!canProceed){
            helpers.errorLog('- - - - - - - - Unable to ping webhook URL - - - - - - - -')
            return
        }
        let domain = 'test';
        if (args.options.domain) {
            domain = args.options.domain
        }
        let event = 'charge.success';
        if (args.options.event) {
            event = args.options.event;
        }
        let eventObject = webhookSamples[event];
        if (eventObject) {
            let key = db.query('selected_integration.keys', { domain, 'type': 'secret' }).key;
            var hash = crypto.createHmac('sha512', key).update(JSON.stringify(eventObject)).digest('hex');
            let uri = db.read('selected_integration.' + domain + '_webhook_endpoint');
            helpers.infoLog('-  - - - - - - -  - - -  - - - -   - - - - -  - - - - - - - - ');
            helpers.infoLog(`Sending sample ${event} event payload to ${uri}`);
            axios.post(uri, eventObject,
                {
                    headers: {
                        'x-paystack-signature': hash
                    }
                },

            ).then((response) => {
                resolve({
                    code: response.status,
                    text: response.statusText,
                    data: response.data
                })
            }).catch((e) => {
                resolve({
                    code: e.response.status,
                    text: e.response.statusText,
                    data: e.response.data
                })
            })
        } else {
            helpers.errorLog('Invalid event type - ' + event)
            reject()
        }
    })

}

function getIntegration(id, token) {
    console.log('getting integration');
    return new Promise((resolve, reject) => {
        axios.get('https://api.paystack.co/integration/' + id,
            {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'jwt-auth': true
                }
            }).then((response) => {
                resolve(response.data.data)
            }).catch((e) => {
                console.error(e)
                reject(e.response.data.message)
            })
    })
}


function signIn(email, password) {
    return new Promise((resolve, reject) => {
        let expiry = parseInt(db.read('token_expiry'));
        let now = parseFloat(Date.now().toString())
        if (expiry > now) {
            resolve({
                token: db.read('token'),
                user: db.read('user'),
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
            reject('LOGIN ERROR: ' + e.response.data.message)
        })

    })
}

module.exports = {
    signIn, getKeys, setWebhook, selectIntegration, getIntegration, pingWebhook
}
