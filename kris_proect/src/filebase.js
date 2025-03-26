// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANKTm8Flu144YS9bJ2gZtQ4_PWFAMegRo",
  authDomain: "kake-af30d.firebaseapp.com",
  projectId: "kake-af30d",
  storageBucket: "kake-af30d.firebasestorage.app",
  messagingSenderId: "43317871612",
  appId: "1:43317871612:web:118a103d54a6a28b99e879",
  measurementId: "G-6WRVEL7RWT"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)