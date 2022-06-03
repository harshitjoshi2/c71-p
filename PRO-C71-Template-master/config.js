import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAiDo9RqIcP7NXOS5NBJjZXaR3A0HqoHd8",
    authDomain: "e-ride-b5d76.firebaseapp.com",
    projectId: "e-ride-b5d76",
    storageBucket: "e-ride-b5d76.appspot.com",
    messagingSenderId: "749482203831",
    appId: "1:749482203831:web:eed338fcc8c3548555cb32"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
