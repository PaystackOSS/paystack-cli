import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ token: '', user: {}, selected_integration: {} }).write();

export function write(key, value) {
  db.set(key, value).write();
}

export function read(key) {
  return db.get(key).value();
}

export function addToList(key, value) {
  db.get(key).push(value).write();
}

export function query(key, query) {
  return db.get(key).find(query).value();
}

export default db;
