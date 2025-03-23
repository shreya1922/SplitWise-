// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAIYx9_M1EsMPwPpkC2c3TLKytt5k_t9Z8",
    authDomain: "hackathon-6af4a.firebaseapp.com",
    projectId: "hackathon-6af4a",
    storageBucket: "hackathon-6af4a.firebasestorage.app",
    messagingSenderId: "626901742012",
    appId: "1:626901742012:web:2243b78664fb3d1b4bfbb9",
    measurementId: "G-6XM5FFFTQW"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
