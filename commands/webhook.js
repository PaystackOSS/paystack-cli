const ngrok = require('ngrok');
const helpers = require('../lib/helpers')
const Paystack = require('../lib/Paystack')

const init = () => {
    vorpal
        .command('webhook <command> [local_route]', 'runs a webhook endpoint health check and listens for incoming webhooks".')
        .option('--domain  <value>', '  ')
        .validate(function (args) {
            let selected_integration = db.read('selected_integration.id');
            let user = db.read('user.id')
            if (!selected_integration || !user) {
                helpers.errorLog("You're not signed in, please run the `login` command before you begin");
                return false;
            }
        })
        .action(async function (args, callback) {
            if (args.command == 'listen') {
                let token = ''
                let expiry = parseInt(db.read('token_expiry'))*1000;
                let now =parseFloat( Date.now().toString() )

                if (expiry > now) {

                    token = db.read('token')

                } else {
                    console.log(expiry);
                    console.log(now);
                    let password = helpers.prompt("What's your paystack password:\n>", true)
                    var [err, result] = await helpers.promiseWrapper(Paystack.signIn(db.read('user.email'), password));
                    if (!result) {
                        return
                    }
                    token = result.token
                }

                if (!args.local_route) {
                    helpers.errorLog('To listen to webhook events locally, you have to specify a local url to forward events to e.g localhost:3000/webhook')
                }
                let urlObject = helpers.parseURL(args.local_route)

                if (!urlObject.port) {
                    urlObject.port = 8080
                }
                if (!urlObject.search || urlObject.search == '?') {
                    urlObject.search = ''
                }
                let ngrokHost = await ngrok.connect(urlObject.port);



                let ngrokURL = ngrokHost + urlObject.pathname + urlObject.search;
                let domain = 'test';
                if (args.options.domain == 'live') {
                    domain = 'live'
                }
                helpers.infoLog('Tunelling webhook events to ' + args.local_route)
                var [err, result] = await helpers.promiseWrapper(Paystack.setWebhook(ngrokURL, token, db.read('selected_integration.id')))
                if (err) {
                    this.log(err);
                    return
                } else {
                    this.log('Webhook events would now be received at ' + args.local_route)
                }

            }

            callback();
        });
}

module.exports = init