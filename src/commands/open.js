const { Command } = require('@oclif/core')
const open = require('open');
class OpenCommand extends Command {
  async run() {
    const { args } = await this.parse(OpenCommand)
    let page = args.page.toLowerCase();
    switch (page) {
      case 'api':
        open("https://paystack.com/docs/api/");
        break;
      case 'docs':
        open("https://paystack.com/docs/");
        break;
        case 'documentation':
          open("https://paystack.com/docs/");
          break;
      case 'dashboard':
        open("https://dashboard.paystack.com/");
        break;
      default:
        this.log(`Unrecognized argument ${page}`)
        break;
    }
  }
}

OpenCommand.description = 'Open Paystack docs, API reference or dashboard'
OpenCommand.args = [
  { name: 'page' }
]

module.exports = OpenCommand