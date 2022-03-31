const {Command} = require('@oclif/core')
const db = require('../lib/db')
const helpers= require('../lib/helpers')
class WhoCommand extends Command {
  async run() {
    let selected_integration = db.read('selected_integration.id')
    let user_id = db.read('user.id')
    let user = db.read('user');
    let integration = db.read('selected_integration')
    if (!selected_integration || !user_id) {
      return this.log("You're not signed in yet")
    }
    let expiry = parseInt(db.read('token_expiry'), 10) * 1000
    let now = parseFloat(Date.now().toString())
    if (expiry > now) {
      return this.log('Logged in as ' + user.email + ' -  ' + integration.business_name + ' (' + integration.id + ')')
    } else {
      return this.log("Your sign in session expired ")
    }
  }
}

WhoCommand.description = 'Display the current logged in user'

module.exports = WhoCommand