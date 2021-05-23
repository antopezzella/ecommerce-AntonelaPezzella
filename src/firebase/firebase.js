import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyC5a_VOyfZEXKQzvzxJUup-ETSIzHBWObM",
    authDomain: "ecommerce-plantasia.firebaseapp.com",
    projectId: "ecommerce-plantasia",
    storageBucket: "ecommerce-plantasia.appspot.com",
    messagingSenderId: "241546741280",
    appId: "1:241546741280:web:700f2392ef91a8c1b11e45"
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);