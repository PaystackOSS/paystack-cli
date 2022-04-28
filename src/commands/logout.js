const {Command} = require('@oclif/core')
const db = require('../lib/db');
class LogoutCommand extends Command {
  async run() {
      db.clear();
    this.log("Logged out successfully")
  }
}

LogoutCommand.description = 'Log out of the CLI'

module.exports = LogoutCommand