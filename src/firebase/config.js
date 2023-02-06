import { initializeApp } from "firebase/app";
// Real Time Database
import { getDatabase, ref, set } from "firebase/database";
// Authentication
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPUdRk9h2ogTguBCzdorZG3n6PaR7noYw",
  authDomain: "fir-frontend-eb676.firebaseapp.com",
  projectId: "fir-frontend-eb676",
  storageBucket: "fir-frontend-eb676.appspot.com",
  messagingSenderId: "618131261565",
  appId: "1:618131261565:web:bedd83f0815f39a5f14914",
  databaseURL: "https://fir-frontend-eb676-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


/*
function writeUserData(userId, name, email) {
const db = getDatabase(app);
set(ref(db, 'users/' + userId), {
  username: name,
  email: email,
  //profile_picture: imageUrl
});
}
*/
export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};