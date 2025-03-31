// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKo2hJhE4Xa6tHEt06z2cvI0zEZQ4lj5c",
  authDomain: "achievvers-ebb8d.firebaseapp.com",
  projectId: "achievvers-ebb8d",
  storageBucket: "achievvers-ebb8d.firebasestorage.app",
  messagingSenderId: "1090900772902",
  appId: "1:1090900772902:web:56581cce7025d893b13ee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
