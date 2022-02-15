const { Command, CliUx } = require('@oclif/core')
const platform = require('platform');
const Pusher = require('pusher-js');
const shell = require('shelljs')
if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git')
    shell.exit(1)
}


class InfoCommand extends Command {
    async run() {
        const { args } = await this.parse(InfoCommand)
        this.log(this.config.userAgent);
        this.log(' Is Windows ', this.config.windows);
        this.log(platform.toString());
        this.log(this.config.home);

        // Enable pusher logging - don't include this in production
        // CliUx.ux.action.start('Waiting for login')
      // console.log('this',this.config._commands)
        var pusher = new Pusher('5c22967561ccb118c71a', {
            cluster: 'eu'
        });

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data) {
            console.log(JSON.stringify(data));
            
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
                // eslint-disable-next-line no-process-exit
                process.exit()
              })
        });
    }
}
InfoCommand.description = 'Get device info '
InfoCommand.args = [
]
module.exports = InfoCommand
