import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpxgrTTEA8HV7Y7OGE29KLe5_hLqa5KeA",
  authDomain: "naicul-instagram-clone.firebaseapp.com",
  databaseURL: "https://naicul-instagram-clone.firebaseio.com",
  projectId: "naicul-instagram-clone",
  storageBucket: "naicul-instagram-clone.appspot.com",
  messagingSenderId: "722325305522",
  appId: "1:722325305522:web:7f49b326e465939d4f31ab",
  measurementId: "G-1ZVZM7JZJS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
