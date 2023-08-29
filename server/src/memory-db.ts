import Datastore from 'nedb'; // Use default import

// Create an in-memory database instance
const db = new Datastore();

// Functions to interact with the in-memory database
const addUser = (user: any) => {
  db.insert(user);
};

const getUsers = () => {
  return new Promise<any[]>((resolve, reject) => {
    db.find({}, (err: Error, users: any[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(users);
      }
    });
  });
};

export { addUser, getUsers };
