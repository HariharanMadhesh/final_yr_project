
const firebase = require('firebase');


// Initialize Firebase App
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPjcj4BxmOCX5Nu-5KZXuqIckP7E3OcXw",
    authDomain: "fir-basics-69ac4.firebaseapp.com",
    databaseURL: "https://fir-basics-69ac4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-basics-69ac4",
    storageBucket: "fir-basics-69ac4.appspot.com",
    messagingSenderId: "547020170883",
    appId: "1:547020170883:web:15a74f1d93a42f298c9db6",
    measurementId: "G-4VYDVVPSEY"
  };

firebase.initializeApp(firebaseConfig);



const database = firebase.database();

database.ref('/users').once('value', (snapshot) => {
  console.log(snapshot.val());
});


