/* eslint-disable no-unused-vars */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */
const {Command,Flags} = require('@oclif/core')
const ngrok = require('ngrok')
const helpers = require('../lib/helpers')
const Paystack = require('../lib/paystack')
const db = require('../lib/db')

class WebhookCommand extends Command {
  async run() {
    let selected_integration = db.read('selected_integration.id')
    let user = db.read('user.id')
    if (!selected_integration || !user) {
      this.error("You're not signed in, please run the `paystack login` command before you begin")
    }
    const {args, flags} = await this.parse(WebhookCommand)
    switch (args.subcommand) {
    case 'listen': {
      let token = ''
      let expiry = parseInt(db.read('token_expiry'), 10) * 1000
      let now = parseFloat(Date.now().toString())

      if (expiry > now) {
        token = db.read('token')
      } else {
        await helpers.promiseWrapper(Paystack.refreshIntegration())
        token = db.read('token')
      }

      if (!flags.forward) {
        this.error('To listen to webhook events locally, you have to specify a local route to forward events to using the forward flag e.g --forward localhost:3000/webhook')
      }
      let urlObject = helpers.parseURL(flags.forward)

      if (!urlObject.port) {
        urlObject.port = 8080
      }
      if (!urlObject.search || urlObject.search === '?') {
        urlObject.search = ''
      }
      try {
        await ngrok.disconnect()
      } catch (error) {
        this.error(error)
      }
      let ngrokHost = await ngrok.connect(urlObject.port)
      let ngrokURL = ngrokHost + urlObject.pathname + urlObject.search
      let domain = 'test'
      if (flags.domain === 'live') {
        domain = 'live'
      }
      console.log('tunnel', ngrokURL)
      let originalWebhookUrl = db.read('selected_integration.' + domain + '_webhook_endpoint')
      helpers.infoLog(`Forwarding webhook events to ${flags.forward}`)

      // eslint-disable-next-line no-unused-vars
      var [err, result] = await helpers.promiseWrapper(Paystack.setWebhook(ngrokURL, token, db.read('selected_integration.id'), domain))
      if (err) {
        this.error(err)
      }
      this.log('Webhook events would now be forwarded to ' + flags.forward)
      const api = ngrok.getApi()
      let tunnels = await api.get('api/tunnels')
      tunnels = JSON.parse(tunnels).tunnels
      let tunnel
      for (let i = 0; i < tunnels.length; i++) {
        if (tunnels[i].public_url === ngrokHost) {
          tunnel = tunnels[i]
        }
      }
      if (process.platform === 'win32') {
        var rl = require('readline').createInterface({
          input: process.stdin,
          output: process.stdout,
        })
        rl.on('SIGINT', function () {
          process.emit('SIGINT')
        })
      }
      process.on('SIGINT', async () => {
        // graceful shutdown
        this.log('cleaning up ')
        var [err, result] = await helpers.promiseWrapper(Paystack.setWebhook(originalWebhookUrl, token, db.read('selected_integration.id'), domain))
        if (err) {
          this.error(err)
        }
        // eslint-disable-next-line no-process-exit
        process.exit()
      })
      helpers.webhookInspector(api, tunnel)
      break
    }
    case 'ping': {
      await helpers.promiseWrapper(Paystack.refreshIntegration())
      // eslint-disable-next-line no-unused-vars
      var [e, response] = await helpers.promiseWrapper(Paystack.pingWebhook(flags))
      helpers.infoLog('-  - - - - WEBHOOK RESPONSE - - - -  - -')
      helpers.infoLog(response.code + ' - - ' + response.text)
      if (helpers.isJson(response.data)) {
        helpers.jsonLog(response.data)
      } else {
        helpers.infoLog(response.data)
      }
      break
    }
    }
  }
}

WebhookCommand.description = 'Listen for webhook events locally, and ping your webhook URL from the CLI'
WebhookCommand.args = [
  {name: 'subcommand'},
]

WebhookCommand.flags = {
  forward: Flags.string(),
  domain: Flags.string(),
}
module.exports = WebhookCommand
