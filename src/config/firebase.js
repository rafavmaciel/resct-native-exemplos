import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDTG-OsqHZNGEhwEQQl58YVa-rcFbFqATo",
    authDomain: "fir-2df5d.firebaseapp.com",
    projectId: "fir-2df5d",
    storageBucket: "fir-2df5d.appspot.com",
    messagingSenderId: "210685084921",
    appId: "1:210685084921:web:40785e3e17cc957f7a0e28",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
