import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5RmIS9Xl1bBXhJ5wl-FarEDXyz76y13E",
  authDomain: "journal-app-24708.firebaseapp.com",
  projectId: "journal-app-24708",
  storageBucket: "journal-app-24708.appspot.com",
  messagingSenderId: "431535806845",
  appId: "1:431535806845:web:7052067e93e332b479d414"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}