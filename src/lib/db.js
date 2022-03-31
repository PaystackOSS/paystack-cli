const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// eslint-disable-next-line camelcase
db.defaults({token: '', user: {}, selected_integration: {}}).write()

module.exports = {
  clear: function(){
    db.set('token','').write();
    db.set('token_expiry', Number(Date.now())/1000).write();
    db.set('user', {}).write();
    db.set('selected_integration', {}).write();
  },
  write: function (key, value) {
    db.set(key, value).write()
  },
  read: function (key) {
    return db.get(key).value()
  },
  addToList: function (key, value) {
    db.get(key)
    .push(value)
    .write()
  },
  query: function (key, query) {
    return db.get(key)
    .find(query).value()
  },
}
