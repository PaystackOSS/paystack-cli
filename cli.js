#!/usr/bin/env node
const vorpal = require('vorpal')();
const chalk = require('chalk');
const Paystack = require('./lib/Paystack')
const promiseWrapper = require('./lib/promise-wrapper')
const APIs = require('./lib/Paystack/apis')
const axios = require('axios')
const instance = axios.create({
  baseURL: 'https://api.paystack.co',
  timeout: 1000,
  headers: { 'Authorization': 'Bearer ' + 'sk_test_02df9413ed474f26fd3e4ba3a2289cff3f6b39ba' }
});
let commands = Object.keys(APIs)
commands.forEach((command) => {
  let section = APIs[command];
  let vorp = vorpal.command(command + ' <command>', getDescription(section, command)).action(async function (args, callback) {
    let schema = findSchema(command, args)
    let [err, result] = await promiseWrapper(executeSchema(schema, args))
    if (err) {
      errorLog(err.response.data.message || JSON.stringify(err))
      return;
    }
    const progress = require('progressbar').create().step('the task you are currently performing')
      // use an array of steps that execute one second after each other
      // as if we do them all instantly
      // you won't see the progress bar as it will be instant
      ;[
        () => progress.setTotal(5),
        () => progress.setTick(1),
        () => progress.setTick(2),
        () => progress.setTick(3),
        () => progress.addTick(),
        () => progress.addTick(),
        () => progress.finish()  // remove and destroy the progress bar
      ].forEach(function (step, index) {
        setTimeout(step, index * 1000)
      })
    successLog(result.message)
    jsonLog(result.data)
  })
  let added_options = [];
  section.forEach((f) => {
    f.params.forEach((o) => {
      if (added_options.indexOf(o.parameter) < 0) {
        vorp.option('--' + o.parameter + ' <value> ', '  ')
        added_options.push(o.parameter)
      }

    })
  })
})



vorpal
  .command('webhook', 'runs a webhook endpoint health and listens for incoming webhooks".')
  .option('test <str>', '-t', 'a test')
  .action(function (args, callback) {
    this.log(args);
    callback();
  });

function errorLog(error) {
  const eLog = chalk.red(error)
  console.log(eLog)
}

function successLog(error) {
  const eLog = chalk.green(error)
  console.log(eLog)
}


function infoLog(error) {
  const eLog = chalk.blue(error)
  console.log(eLog)
}

function jsonLog(json) {
  let keys = Object.keys(json);
  keys.forEach((k) => {
    console.log(`${k} - - - -- - -- - - - - - -  - - - -  - ${json[k]}`)
  })
}

function findSchema(command, args) {
  let schema;
  APIs[command].forEach((f) => {
    if (f.api == args.command) {
      schema = f;
    }
  })
  return schema;
}

async function executeSchema(schema, args) {
  return new Promise((resolve, reject) => {
    let query, data;
    if (schema.method == 'GET') query = args.options;
    if (schema.method == 'POST') data = args.options;
    instance({
      url: schema.endpoint,
      method: schema.method,
      query,
      data
    }).then((resp) => {
      resolve(resp.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

function getDescription(section, title) {
  let desc = ''
  section.forEach((f) => {
    desc = desc + ', ' + f.api
  })
  desc = desc + ' ' + title;
  desc = desc.slice(1);
  return desc;
}
vorpal
  .delimiter('paystack$')
  .show();