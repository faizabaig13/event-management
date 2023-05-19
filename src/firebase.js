// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCe0d3YUqh3XwI6tRSXfnhPLdv-FAxXHM",
  authDomain: "eventmanagement-a6cfa.firebaseapp.com",
  projectId: "eventmanagement-a6cfa",
  storageBucket: "eventmanagement-a6cfa.appspot.com",
  messagingSenderId: "229710843919",
  appId: "1:229710843919:web:4928d0bbe1ae385840937a",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);