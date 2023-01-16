// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ2X9yNK0FfbgmJsRZjFzJUCPkVh5Ay8M",
  authDomain: "ecommerce-n-s-e-r.firebaseapp.com",
  projectId: "ecommerce-n-s-e-r",
  storageBucket: "ecommerce-n-s-e-r.appspot.com",
  messagingSenderId: "193862002403",
  appId: "1:193862002403:web:563fd33dd29d01c46147d6",
  measurementId: "G-RWR0095Q80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)