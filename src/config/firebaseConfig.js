import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/analytics";

// Your web app's Firebase configuration

firebase.initializeApp({
  apiKey: "AIzaSyD_iDuzR2c0lz1Sp1im-OwyQZZWFxZFb60",
  authDomain: "signup-21fdf.firebaseapp.com",
  databaseURL: "https://signup-21fdf.firebaseio.com",
  projectId: "signup-21fdf",
  storageBucket: "signup-21fdf.appspot.com",
  messagingSenderId: "788590962087",
  appId: "1:788590962087:web:b861ffa8b8d0faa5304282",
});
firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
