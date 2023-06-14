// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoUVqe1pHQjLAzybqdqZZaIyF-nOlXazA",
  authDomain: "linkedin-clone-9307a.firebaseapp.com",
  projectId: "linkedin-clone-9307a",
  storageBucket: "linkedin-clone-9307a.appspot.com",
  messagingSenderId: "870937420904",
  appId: "1:870937420904:web:cb0cc60ef00ecf50bbc7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export {auth, app,firestore};
