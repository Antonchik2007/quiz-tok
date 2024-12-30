// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config (replace with your actual config values)
const firebaseConfig = {
    apiKey: "AIzaSyB6WNG5B-DvhorLa0fI5CRt1kndLz_P7Yg",
    authDomain: "quiztok-da872.firebaseapp.com",
    projectId: "quiztok-da872",
    storageBucket: "quiztok-da872.firebasestorage.app",
    messagingSenderId: "492561042237",
    appId: "1:492561042237:web:91f19f2c4e1d88e1645354",
    measurementId: "G-H2G72MR9GC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export the instances to use them in other parts of your app
export { db, auth, googleProvider };
