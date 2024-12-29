import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVci7MHv7a789HkUt0KqGXO6BFekXRXvQ",
  authDomain: "agse-media.firebaseapp.com",
  projectId: "agse-media",
  storageBucket: "agse-media.firebasestorage.app",
  messagingSenderId: "350211686817",
  appId: "1:350211686817:web:b078d52746c7bd4fe04be0",
  measurementId: "G-Z4EX2HC4YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);