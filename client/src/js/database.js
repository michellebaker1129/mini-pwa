//  Install the following package:
import { openDB } from 'idb';

//  Complete the initDb() function below:
const initdb = async () => {
openDB("contactDB", 1, {
    upgrade(db) {
        if (db.objectStoreNames.contains('contactDB')) {
            return;
        }
        db.createObjectStore('contactDB', { keyPath: 'id', autoIncrement: true });
    }
})
};


// Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
 const contactDB = await openDB('contactDB', 1);
 const tx = contactDB.transaction('contactDB', 'readwrite');
 const store = tx.objectStore('contactDB');
 const request = store.add({ name: name, home_phone: home, cell_phone: cell, email: email, });
};

// Complete the getDb() function below:
export const getDb = async () => {
  const contactDB = await openDB('contactDB', 1);
  const tx = contactDB.transaction('contactDB', 'readonly');
  const store = tx.objectStore('contactDB');
  const request = store.getAll();
  const result = await request;
  return result;
};

// Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  const contactDB = await openDB('conactDB', 1);
  const tx = contactDB.transaction('contactDB', 'readwrite');
  const store = tx.objectStore('contactDB');
  const request = store.delete(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
