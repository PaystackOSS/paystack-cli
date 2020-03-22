const APIs = require('../lib/paystack/apis')
const helpers = require('../lib/helpers')

let commands = Object.keys(APIs)
const init = () => {
    commands.forEach((command) => {
        let section = APIs[command];
        let vorp = vorpal.command(command + ' <command>', helpers.getDescription(section, command)).action(async function (args, callback) {
            let schema = JSON.parse(JSON.stringify(helpers.findSchema(command, args)))
            let [err, result] = await helpers.promiseWrapper(helpers.executeSchema(schema, args))
            if (err) {

                if (err.response) {
                    helpers.errorLog(err.response.data.message)
                    return;
                }
                helpers.errorLog(err)
                return;
            }
            helpers.successLog(result.message)
            helpers.jsonLog(result.data)
        })
        vorp.option('--domain  <value>', '  ');
        let added_options = ['domain'];
        section.forEach((f) => {
            f.params.forEach((o) => {
                if (added_options.indexOf(o.parameter) < 0) {
                    vorp.option('--' + o.parameter + ' <value> ', '  ')
                    added_options.push(o.parameter)
                }

            })
        })
    })
}

module.exports = init