
var admin = require("firebase-admin");

var serviceAccount = require("../fir-basics-69ac4-firebase-adminsdk-i2avt-77d0d951cf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-basics-69ac4-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const db = admin.database();
const ref = db.ref('users');

// Create
const newUser = {
  name: 'Jesus was semitie',
  email: 'semitic_jew@based.com',
  age: 5,
};
ref.push(newUser);

// Read
ref.once('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    console.table(childKey);
    console.table(childData);

  });
});




// Delete
//ref.child(userId).remove();