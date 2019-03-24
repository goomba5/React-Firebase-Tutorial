import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
// The API key is okay to be here
var config = {
  apiKey: "AIzaSyCtwZxYIaU3osw1Fomvxmic7Hp4tDNu04c",
  authDomain: "react-firebase-tut-5f3a0.firebaseapp.com",
  databaseURL: "https://react-firebase-tut-5f3a0.firebaseio.com",
  projectId: "react-firebase-tut-5f3a0",
  storageBucket: "react-firebase-tut-5f3a0.appspot.com",
  messagingSenderId: "348944669631"
};

firebase.initializeApp(config);
// changes how firebase works with timestamp
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
