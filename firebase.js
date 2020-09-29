  import firebase from '@firebase/app';
import '@firebase/firestore';

  var config = {
    apiKey: "AIzaSyB8gVOGERcTGtYNutQWApr3nTjnbe3tmRM",
    authDomain: "test-24d7e.firebaseapp.com",
    databaseURL: "https://test-24d7e.firebaseio.com",
    projectId: "test-24d7e",
    storageBucket: "test-24d7e.appspot.com",
    messagingSenderId: "840477858660"
  };

firebase.initializeApp(config);

export default firebase;