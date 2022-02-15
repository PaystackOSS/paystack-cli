
const {Command, Flags} = require('@oclif/core')
const helpers = require('../lib/helpers')
const APIs = require('../lib/paystack/apis')
const db = require('../lib/db')
let key = 'subaccount';
let API = APIs[key];
class SubaccountCommand extends Command {

  
  async run() {
    const {args, flags} = await this.parse(SubaccountCommand)
    let selected_integration = db.read('selected_integration.id')
    let user = db.read('user.id')
    if (!selected_integration || !user) {
      this.error("You're not signed in, please run the `login` command before you begin")
    }
    let schema = helpers.findSchema(key, args.endpoint, flags)
    if(!schema){
      helpers.errorLog(`ValidationError: Invalid endpoint 'subaccount'`)
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


SubaccountCommand.description = helpers.getDescription(API, key)

SubaccountCommand.flags = {
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
        SubaccountCommand.flags[param.parameter] = Flags.string()
        break
      case 'Number':
        SubaccountCommand.flags[param.parameter] = Flags.integer()
        break
      case 'Boolean':
        SubaccountCommand.flags[param.parameter] = Flags.boolean()
        break
      default:
        SubaccountCommand.flags[param.parameter] = Flags.string()
      }
      addedFlags.push(param.parameter)
    }
  })
})
SubaccountCommand.args = [
    {name: 'endpoint',   required: true, options: endpoints}
  ]


module.exports = SubaccountCommand;


