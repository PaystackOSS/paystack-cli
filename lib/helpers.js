import chalk from 'chalk';
import readlineSync from 'readline-sync';
import url from 'url';
import APIs from './paystack/apis.js';
import axios from 'axios';

export function prompt(question, mute = false) {
  return readlineSync.question(question, { hideEchoBack: mute });
}

export const promiseWrapper = (promise) =>
  promise.then((data) => [null, data]).catch((error) => [error]);

export function jsonLog(json) {
  infoLog(JSON.stringify(json, null, 2));
}

export function successLog(error) {
  const eLog = chalk.green(error);
  console.log(eLog);
}

export function errorLog(error) {
  const eLog = chalk.red(error);
  console.log(eLog);
}

export function isJson(val) {
  return val instanceof Array || val instanceof Object ? true : false;
}

export function loader() {
  let progress = require('progressbar').create().step('. .');
  return new Promise((resolve, reject) => {
    [
      () => progress.setTotal(3),
      () => progress.addTick(),
      () => progress.addTick(),
      () => progress.addTick(),
      () => progress.finish(), // remove and destroy the progress bar
    ].forEach(function (step, index) {
      setTimeout(step, index * 1000);
    });
    resolve('hello');
  });
}

export function infoLog(error) {
  const eLog = chalk.blueBright(error);
  console.log(eLog);
}

export function parseURL(uri) {
  if (!uri.startsWith('http')) uri = 'http://' + uri;
  return url.parse(uri);
}

export function findSchema(command, args) {
  let schema;
  APIs[command].forEach((f) => {
    if (f.api == args.command) {
      schema = f;
    }
  });
  return schema;
}

function getKeys(token, type = 'secret', domain = 'test') {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.paystack.co/integration/keys', {
        headers: { Authorization: 'Bearer ' + token, 'jwt-auth': true },
      })
      .then((response) => {
        let key = {};
        let keys = response.data.data;
        if (keys.length) {
          for (let i = 0; i < keys.length; i++) {
            if (keys[i].domain === domain && keys[i].type === type) {
              key = keys[i];
              break;
            }
          }
        }
        resolve(key.key);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response.data.message);
          return;
        }
        reject(error);
      });
  });
}

export async function executeSchema(schema, args) {
  let domain = 'test';
  if (args.options.domain) {
    domain = args.options.domain;
  }
  let token = db.read('token');
  let key = await getKeys(token, 'secret', domain);
  let instance = axios.create({
    baseURL: 'https://api.paystack.co',
    timeout: 3000,
    headers: { Authorization: 'Bearer ' + key },
  });
  return new Promise((resolve, reject) => {
    let query, data;
    if (schema.method == 'GET') query = args.options;
    if (schema.method == 'POST') data = args.options;
    if (schema.endpoint.indexOf('{')) {
      let path = schema.endpoint.slice(
        schema.endpoint.indexOf('{') + 1,
        schema.endpoint.indexOf('}')
      );

      schema.endpoint = schema.endpoint.replace(
        '{' + path + '}',
        args.options[path]
      );
    }
    instance({
      url: schema.endpoint,
      method: schema.method,
      query,
      data,
    })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
}

export function getDescription(section, title) {
  let desc = '';
  section.forEach((f) => {
    desc = desc + ', ' + f.api;
  });
  desc = desc + ' ' + title;
  desc = desc.slice(1);
  return desc;
}
