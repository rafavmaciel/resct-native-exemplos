import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDkC6QLtbjvhgGvLdhpnjTHRKGktlH9678",
    authDomain: "react-native-exemplo.firebaseapp.com",
    databaseURL: "https://react-native-exemplo-default-rtdb.firebaseio.com",
    projectId: "react-native-exemplo",
    storageBucket: "react-native-exemplo.appspot.com",
    messagingSenderId: "824134518768",
    appId: "1:824134518768:web:167a552e0a86ed44efff35",
    measurementId: "G-EYD4KHL2XC"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
