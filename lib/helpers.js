const readlineSync = require('readline-sync');
const chalk = require('chalk');
const url = require('url');
const APIs = require('./paystack/apis')
const axios = require('axios')
function prompt(question, mute = false) {
  return readlineSync.question(question, { hideEchoBack: mute })
}
const promiseWrapper = promise => (
  promise
    .then(data => ([null, data]))
    .catch(error => ([error]))
);

function jsonLog(json) {
  let keys = Object.keys(json);
 
  keys.forEach((k) => {
    if(isJson(json[k]) || json[k] == null){
      return
    }
    infoLog(`${k} - - - -- - -- - - - - - -  - - - -  - ${json[k]}`)
  })
}
function successLog(error) {
  const eLog = chalk.green(error)
  console.log(eLog)
}
function errorLog(error) {
  const eLog = chalk.red(error)
  console.log(eLog)
}
function isJson(val) {
 
    return val instanceof Array || val instanceof Object ? true : false;


}

function loader() {
  let progress = require('progressbar').create().step('. .')
  return new Promise((resolve, reject) => {
    [
      () => progress.setTotal(3),
      () => progress.addTick(),
      () => progress.addTick(),
      () => progress.addTick(),
      () => progress.finish()  // remove and destroy the progress bar
    ].forEach(function (step, index) {
      setTimeout(step, index * 1000)

    })
    resolve('hello');
  })
}
function infoLog(error) {
  const eLog = chalk.blue(error)
  console.log(eLog)
}
function parseURL(uri) {
  if (!uri.startsWith('http')) uri = 'http://' + uri
  return url.parse(uri)

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
  let domain = 'test';
  if (args.options.domain) {
    domain = args.options.domain
  }
  let key = db.query('selected_integration.keys', { domain, 'type': 'secret' }).key;
  let instance = axios.create({
    baseURL: 'https://api.paystack.co',
    timeout: 3000,
    headers: { 'Authorization': 'Bearer ' + key }
  });
  return new Promise((resolve, reject) => {
    let query, data;
    if (schema.method == 'GET') query = args.options;
    if (schema.method == 'POST') data = args.options;
    if (schema.endpoint.indexOf('{')) {
      let path = schema.endpoint.slice(schema.endpoint.indexOf('{') + 1, schema.endpoint.indexOf('}'))

      schema.endpoint = schema.endpoint.replace('{' + path + '}', args.options[path]);

    }
    instance({
      url: schema.endpoint,
      method: schema.method,
      query,
      data
    }).then((resp) => {
      resolve(resp.data)
    }).catch((err) => {
      reject(err.response.data.message)
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


module.exports = { prompt, promiseWrapper, successLog, jsonLog , errorLog, infoLog, isJson, loader, parseURL, findSchema, executeSchema, getDescription}