/*
TFG LABS
created by : sai Teja
created on : April 12, 2022

Connecting the App to firebase
*/

import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAy119cw3g8WpoWEF0p9hx4yLp4A_ti_Mc",
  authDomain: "storingdata-63e34.firebaseapp.com",
  databaseURL: "https://storingdata-63e34-default-rtdb.firebaseio.com",
  projectId: "storingdata-63e34",
  storageBucket: "storingdata-63e34.appspot.com",
  messagingSenderId: "285292877770",
  appId: "1:285292877770:web:bda657916f94bcd493e133",
  measurementId: "G-VJ38Z8XPPJ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

// import "firebase/auth"
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyD-O19Oi0HmTgm0mnFR07bqWlopTsTagHc",
//     authDomain: "newproject-958f2.firebaseapp.com",
//     databaseURL: "https://newproject-958f2-default-rtdb.firebaseio.com",
//     projectId: "newproject-958f2",
//     storageBucket: "newproject-958f2.appspot.com",
//     messagingSenderId: "329947901992",
//     appId: "1:329947901992:web:6728c1d951748344b8451d",
//     measurementId: "G-3D4M5Z6QX3"
//   };


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();


// export { auth, provider };
// export default db;