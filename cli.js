#!/usr/bin/env node
global.vorpal = require('vorpal')();
vorpal.isCommandArgKeyPairNormalized = false;
const shell = require('shelljs');
global.db = require('./lib/db')
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

vorpal
  .delimiter('paystack $')
  .show();


  require('./commands/webhook')();
  require('./commands/api')();
  require('./commands/auth')();
  require('./commands/samples')();
  // module.exports = {vorpal, db, shell};

