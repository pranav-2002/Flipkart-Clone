import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXm694rmL4YpsB_6Aq_KOxhhuMJlSs3JE",
  authDomain: "flp-cln.firebaseapp.com",
  projectId: "flp-cln",
  storageBucket: "flp-cln.appspot.com",
  messagingSenderId: "32114168818",
  appId: "1:32114168818:web:8487b82e01266a6484116b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
