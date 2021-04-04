/* eslint-disable camelcase */
const {Command, flags} = require('@oclif/command')
const Config = require('@oclif/config')
// eslint-disable-next-line node/no-extraneous-require

const APIs = require('../../lib/paystack/apis')
const helpers = require('../../lib/helpers')
const db = require('../../lib/db')

let commandKeys = Object.keys(APIs)
let declaredCommands = []
class DynamicPlugin extends Config.Plugin {
  get hooks() {
    return {}
  }

  get topics() {
    return [{name: 'api'}]
  }

  get commandIDs() {
    return declaredCommands.map(command => command.id) // where each id starts with 'api:'
  }

  get commands() {
    commandKeys.forEach(key => {
      let API = APIs[key]
      let Cmd = class extends Command {
        constructor(argv, config) {
          super(argv, config)
          this.id = key
          this.aliases = [key]
          this.description = helpers.getDescription(API, key)
          this.pluginName = 'paystack'
          this.pluginType = 'core'
          this.args = [
            {name: 'topic'},
          ]
          this.flags = {
            domain: flags.string(),
          }
          let addedFlags = ['domain']
          API.forEach(path => {
            path.params.forEach(param => {
              if (addedFlags.indexOf(param.parameter) < 0) {
                switch (param.type) {
                case 'String':
                  this.flags[param.parameter] = flags.string()
                  break
                case 'Number':
                  this.flags[param.parameter] = flags.integer()
                  break
                case 'Boolean':
                  this.flags[param.parameter] = flags.boolean()
                  break
                default:
                  this.flags[param.parameter] = flags.string()
                }
                addedFlags.push(param.parameter)
              }
            })
          })
        }

        load() {
          return Cmd
        }

        async run() {
          let selected_integration = db.read('selected_integration.id')
          let user = db.read('user.id')
          if (!selected_integration || !user) {
            this.error("You're not signed in, please run the `login` command before you begin")
          }
          const {args, flags} = this.parse(Cmd)
          let schema = JSON.parse(JSON.stringify(helpers.findSchema(key, args.topic, flags)))
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
      Cmd.args = [
        {name: 'topic'},
      ]
      Cmd.flags = {
        domain: flags.string(),
      }
      let addedFlags = ['domain']
      API.forEach(path => {
        path.params.forEach(param => {
          if (addedFlags.indexOf(param.parameter) < 0) {
            switch (param.type) {
            case 'String':
              Cmd.flags[param.parameter] = flags.string()
              break
            case 'Number':
              Cmd.flags[param.parameter] = flags.integer()
              break
            case 'Boolean':
              Cmd.flags[param.parameter] = flags.boolean()
              break
            default:
              Cmd.flags[param.parameter] = flags.string()
            }
            addedFlags.push(param.parameter)
          }
        })
      })
      declaredCommands.push(new Cmd(this.argv, this.config))
    })
    return declaredCommands
  }
}

const hook = async function () {
  let plugin = new DynamicPlugin(this.config)
  this.config.plugins.push(plugin)
}

module.exports = hook
