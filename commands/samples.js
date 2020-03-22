
const helpers = require('../lib/helpers')
const shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

let samples = require('../lib/samples')

const init = () => {
    vorpal.command('sample <sample> <filepath>', 'Get started quickly with a Paystack sample project').action(async (args, callback) => {

        shell.cd(args.filepath)
        shell.exec('git clone https://github.com/lukman008/Bakerr-Pay.git')
        shell.cd('Bakerr-Pay')
        shell.exec('npm install');
        shell.exec('npm start')
    })
}


module.exports = init