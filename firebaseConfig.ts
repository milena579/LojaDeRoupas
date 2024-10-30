// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAWgQYbq1pvKPbB6a_1iCxe0VyFcDUbA0",
  authDomain: "react-native-senai.firebaseapp.com",
  projectId: "react-native-senai",
  storageBucket: "react-native-senai.appspot.com",
  messagingSenderId: "981730322863",
  appId: "1:981730322863:web:70f6f0f967e63ac106275a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);