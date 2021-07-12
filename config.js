import firebase from "firebase";
require("@firebase/firestore");

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLdgCpuLHA1XWA7VIAosAZi-Plnmb44zo",
    authDomain: "booksanta-app-72b91.firebaseapp.com",
    projectId: "booksanta-app-72b91",
    storageBucket: "booksanta-app-72b91.appspot.com",
    messagingSenderId: "389655278558",
    appId: "1:389655278558:web:4d272fadec86ab0be5234f"
  };
  // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }

export default firebase.firestore();