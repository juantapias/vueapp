import * as firebase from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDrz2LWhb11WDOr5Nls-ZzBHPKMOBeK5hM",
    authDomain: "vue-app-95180.firebaseapp.com",
    databaseURL: "https://vue-app-95180.firebaseio.com",
    projectId: "vue-app-95180",
    storageBucket: "vue-app-95180.appspot.com",
    messagingSenderId: "465202142158",
    appId: "1:465202142158:web:9e670ed42423b8d42f699f"
  };
  // Initialize Firebase
  let app = null;
  if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
