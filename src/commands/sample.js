const {Command} = require('@oclif/command')
const shell = require('shelljs')
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}

let samples = require('../lib/samples')

class SampleCommand extends Command {
  async run() {
    const {args} = this.parse(SampleCommand)
    let keys = Object.keys(samples)
    if (keys.indexOf(args.sample) < 0) {
      this.error('No sample app available with the name ' + args.sample + ', available samples are ' + keys.join(', '))
    }
    let sample = samples[args.sample]

    shell.cd(args.filepath)
    shell.exec('git clone ' + sample.git)
    shell.cd(sample.name)
    shell.exec('npm install')
    shell.exec('npm start')
  }
}
let keys = Object.keys(samples)
SampleCommand.description = 'Get started quickly with a Paystack sample project.  Available samples are ' + keys.toString()
SampleCommand.args = [
  {name: 'sample'},
  {name: 'filepath'},
]
module.exports = SampleCommand
