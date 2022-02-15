/* eslint-disable node/no-extraneous-require */
/* eslint-disable no-console */
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const url = require('url')
const APIs = require('./paystack/apis')
const CliUx = require ('@oclif/core');
const axios = require('axios')
const db = require('./db')

function prompt(question, mute = false) {
  return readlineSync.question(question, {hideEchoBack: mute})
}
const promiseWrapper = promise => (
  promise
  .then(data => ([null, data]))
  .catch(error => ([error]))
)

function jsonLog(json) {
  // let keys = Object.keys(json)
  console.log(json)
  // keys.forEach(k => {
  //   if (isJson(json[k]) || json[k] == null) {
  //     return
  //   }
  //   infoLog(`${k} - - - -- - -- - - - - - -  - - - -  - ${json[k]}`)
  // })
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
  return Boolean(Array.isArray(val) || val instanceof Object)
}

function infoLog(error) {
  const eLog = chalk.blue(error)
  console.log(eLog)
}
function parseURL(uri) {
  if (!uri.startsWith('http')) uri = 'http://' + uri
  return url.parse(uri)
}
function findSchema(command, topic) {
  let schema = null
  APIs[command].forEach(f => {
    if (f.api === topic) {
      schema = f
    }
  })
  return schema
}

function getKeys(token, type = 'secret', domain = 'test') {
  return new Promise((resolve, reject) => {
    axios.get('https://api.paystack.co/integration/keys', { headers: { Authorization: 'Bearer ' + token, 'jwt-auth': true } }).then(response => {
      let key = {};
      let keys = response.data.data;
      if (keys.length) {
        for (let i = 0; i < keys.length; i++) {
          if (keys[i].domain === domain && keys[i].type === type) {
            key = keys[i]
            break
          }
        }
      }
      resolve(key)
    }).catch(error => {
      if (error.response) {
        reject(error.response.data.message)
        return
      }
      reject(error)
    })
  })
}

async function executeSchema(schema, flags) {
  let domain = 'test'
  if (flags.domain) {
    domain = flags.domain
  }
  
  let token = db.read('token');
  let keyObject = await getKeys(token, 'secret', domain);
  // let key = db.query('selected_integration.keys', {domain, type: 'secret'}).key
  let instance = axios.create({
    baseURL: 'https://api.paystack.co',
    timeout: 5000,
    headers: {Authorization: 'Bearer ' + keyObject.key, 'User-Agent':'Paystack-CLI 0.0.7'},
  })
  return new Promise((resolve, reject) => {
    let query
    let data
    if (schema.method === 'GET') query = flags
    if (schema.method === 'POST' || schema.method === 'PUT') data = flags
    if (schema.endpoint.indexOf('{')) {
      let path = schema.endpoint.slice(schema.endpoint.indexOf('{') + 1, schema.endpoint.indexOf('}'))

      schema.endpoint = schema.endpoint.replace('{' + path + '}', flags[path])
    }
    if (schema.parameterType === 'query') {
      let queryString = Object.keys(flags).map(key => key + '=' + flags[key]).join('&')
      schema.endpoint = schema.endpoint + '?' + queryString
    }
    instance({
      url: schema.endpoint,
      method: schema.method,
      query,
      data,
    }).then(resp => {
      resolve(resp.data)
    }).catch(error => {
      if (error.response) {
        reject(error.response.data.message)
        return
      }
      reject(error)
    })
  })
}

function base64ToString(encoded) {
  let buffer = Buffer.from(encoded, 'base64')
  return buffer.toString('ascii')
}

function getWebhookMessage(requestBody) {
  let category = requestBody.event.slice(0, requestBody.event.lastIndexOf('.'))
  let message = ''
  switch (category) {
  case 'customeridentification':
    message = 'Customer Identification status for ' + requestBody.data.customer.email
    break

  case 'charge.dispute':
    message = 'Dispute status for ' + requestBody.data.customer.email
    break
  case 'invoice':
    message = 'Invoice status for ' + requestBody.data.customer.email
    break
  case 'paymentrequest':
    message = 'Payment request status for ' + requestBody.request_code
    break
  case 'subscription':
    message = 'Subscription created for ' + requestBody.data.customer.email
    if (requestBody.data.event === 'subscription.disable') {
      message = 'Subscription disabled for ' + requestBody.data.customer.email
    }
    break
  case 'charge':
    message = 'Transaction status for ' + requestBody.data.customer.email
    break
  case 'transfer':
    message = 'Transfer status for ' + requestBody.data.transfer_code
    break
  }
  return message
}

function webhookInspector(ngrokApi, tunnel) {
  let id = ''
  setInterval(() => {
    CliUx.ux.action.start('.')
    ngrokApi.get(`/api/requests/http?tunnel_name=${tunnel.name}`).then(httpRequests => {
      httpRequests = JSON.parse(httpRequests).requests
      if (httpRequests.length === 0) {
        return
      }
      let lastRequest = httpRequests[0]
      if (lastRequest.id === id) {
        return
      }
      id = lastRequest.id
      let requestBody = base64ToString(lastRequest.request.raw)
      requestBody = requestBody.slice(requestBody.indexOf('{"eve'))
      requestBody = JSON.parse(requestBody)
      let responseCode = lastRequest.response.status_code.toString()
      let webhookDescription = getWebhookMessage(requestBody)
      let responseMessage = responseCode + ' ' + lastRequest.response.status + ' - ' + requestBody.event + ' - ' + webhookDescription
      if (responseCode.slice(0, 1) !== '2') {
        responseMessage = chalk.red(responseMessage)
      }
      console.log(responseMessage)
      console.log(base64ToString(lastRequest.response.raw))
      console.log('----------------------------------------------')
    })
  }, 5000)
}

function getDescription(section, title) {
  let desc = ''
  section.forEach(f => {
    desc = desc + ', ' + f.api
  })
  desc = desc + ' ' + title
  desc = desc.slice(1)
  return desc
}

module.exports = {prompt, promiseWrapper, successLog, jsonLog, errorLog, infoLog, isJson, parseURL, findSchema, executeSchema, getDescription, webhookInspector, getWebhookMessage, base64ToString}
