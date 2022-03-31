const {Command} = require('@oclif/core')
const db = require('../lib/db');
class LogoutCommand extends Command {
  async run() {
      db.clear();
    this.log("Logged out successfully")
  }
}

LogoutCommand.description = 'Open Paystack docs, API reference or dashboard'

module.exports = LogoutCommand