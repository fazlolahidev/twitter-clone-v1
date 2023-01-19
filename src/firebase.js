// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABlPIB4lsEPtbguRPpfXPKwIsqKNOG-PI",
  authDomain: "twitter-clone-60096.firebaseapp.com",
  projectId: "twitter-clone-60096",
  storageBucket: "twitter-clone-60096.appspot.com",
  messagingSenderId: "374456085460",
  appId: "1:374456085460:web:1f930d2c33234f83dc0441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
