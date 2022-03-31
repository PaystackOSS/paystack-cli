
const {Command, Flags} = require('@oclif/core')
const helpers = require('../lib/helpers')
const APIs = require('../lib/paystack/APIs.json')
const Paystack = require('../lib/paystack')
const db = require('../lib/db')
let key = 'transferrecipient';
let API = APIs[key];
class TransferrecipientCommand extends Command {

  
  async run() {
    const {args, flags} = await this.parse(TransferrecipientCommand)
    let selected_integration = db.read('selected_integration.id')
    let user = db.read('user.id')
    if (!selected_integration || !user) {
      this.error("You're not signed in, please run the `paystack login` command before you begin")
    }
    let token = ''
      let expiry = parseInt(db.read('token_expiry'), 10) * 1000
      let now = parseFloat(Date.now().toString())

      if (expiry > now) {
        token = db.read('token')
      } else {
        await helpers.promiseWrapper(Paystack.refreshIntegration())
        token = db.read('token')
      }
    let schema = helpers.findSchema(key, args.endpoint, flags)
    if(!schema){
      helpers.errorLog(`ValidationError: Invalid endpoint 'transferrecipient'`)
      return;
    }
    let [err, result] = await helpers.promiseWrapper(helpers.executeSchema(schema, flags))
    if (err) {
      if (err.response) {
        helpers.errorLog(err.response.data.message)
        return
      }
      helpers.errorLog(err)
      return
    }
    helpers.successLog(result.message)
    helpers.jsonLog(result.data)
   
  }
}


TransferrecipientCommand.description = helpers.getDescription(API, key)

TransferrecipientCommand.flags = {
    domain: Flags.string(),
}
let addedFlags = ['domain']
let endpoints = [];
API.forEach(path => {
  endpoints.push(path.api);
  path.params.forEach(param => {
    if (addedFlags.indexOf(param.parameter) < 0) {
      switch (param.type) {
      case 'String':
        TransferrecipientCommand.flags[param.parameter] = Flags.string()
        break
      case 'Number':
        TransferrecipientCommand.flags[param.parameter] = Flags.integer()
        break
      case 'Boolean':
        TransferrecipientCommand.flags[param.parameter] = Flags.boolean()
        break
      default:
        TransferrecipientCommand.flags[param.parameter] = Flags.string()
      }
      addedFlags.push(param.parameter)
    }
  })
  if(path.variables){
    path.variables.forEach((variable)=>{
      if(addedFlags.indexOf(variable.key) < 0){
        TransferrecipientCommand.flags[variable.key] = Flags.string();
        addedFlags.push(variable.key);
      }
    })
  }
 
})
TransferrecipientCommand.args = [
    {name: 'endpoint',   required: true, options: endpoints}
  ]


module.exports = TransferrecipientCommand;
