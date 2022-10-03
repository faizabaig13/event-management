// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1DtCaMbf430WCVseA9wAMwUbGwG9HPG8",
  authDomain: "eventmanagingapp.firebaseapp.com",
  projectId: "eventmanagingapp",
  storageBucket: "eventmanagingapp.appspot.com",
  messagingSenderId: "604724865473",
  appId: "1:604724865473:web:d7678b0eabf1c98c53a740"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);