// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqTAzdMu308SVozsNI3OcyUinMLK3nusM",
  authDomain: "authentication-23c04.firebaseapp.com",
  projectId: "authentication-23c04",
  storageBucket: "authentication-23c04.appspot.com",
  messagingSenderId: "1033868366381",
  appId: "1:1033868366381:web:32b5ba0ac96965350c5ea4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db=app.firestore()
export default app
