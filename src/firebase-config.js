import firebase from "firebase/app";
import "firebase/storage";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAraGjmWFD6QVYP1zifzLxAJQWIX9JSpE",
  authDomain: "maria-site-75353.firebaseapp.com",
  projectId: "maria-site-75353",
  storageBucket: "maria-site-75353.appspot.com",
  messagingSenderId: "63022920783",
  appId: "1:63022920783:web:38614cb4ea9176ce4a263a"
};

const app = firebase.initializeApp(firebaseConfig);
 
export default app.firestore();
