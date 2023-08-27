#!/usr/bin/env node

import vorpal from 'vorpal';
import shell from 'shelljs';
import * as db from './lib/db.js';

globalThis.vorpal = new vorpal();
globalThis.db = db;

globalThis.vorpal.isCommandArgKeyPairNormalized = false;

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

globalThis.vorpal.delimiter('paystack $').show();

import webhook from './commands/webhook.js';
import api from './commands/api.js';
import auth from './commands/auth.js';
import samples from './commands/samples.js';

webhook();
api();
auth();
samples();
