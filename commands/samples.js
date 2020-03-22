
const helpers = require('../lib/helpers')
const shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

let samples = require('../lib/samples')

const init = () => {
    vorpal.command('sample <sample> <filepath>', 'Get started quickly with a Paystack sample project')
    .validate(function (args) {
        let selected_integration = db.read('selected_integration.id');
        let user = db.read('user.id')
        if (!selected_integration || !user) {
            helpers.errorLog("You're not signed in, please run the `login` command before you begin");
            return false;
        }
    }).action(async (args, callback) => {

        shell.cd(args.filepath)
        shell.exec('git clone https://github.com/lukman008/Bakerr-Pay.git')
        shell.cd('Bakerr-Pay')
        shell.exec('npm install');
        shell.exec('npm start')
    })
}


module.exports = init