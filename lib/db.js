import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';

const adapter = new JSONFileSync('db.json');
const db = new LowSync(adapter, {
  token: '',
  user: {},
  selected_integration: {},
});

db.read();
db.write();

export function write(key, value) {
  db.data[key] = value;
  db.write();
}

export function read(key) {
  return db.data[key];
}

export function addToList(key, value) {
  const list = read(key);
  if (Array.isArray(list)) {
    list.push(value);
    write(key, list);
  } else {
    console.error(`db.${key} is not a list.`);
  }
}

export function query(key, query) {
  const list = read(key);
  if (Array.isArray(list)) {
    // should this use filter ??
    // what type do we want to return
    return list.find(query);
  } else {
    console.error(`db.${key} can't be queried.`);
  }
}
