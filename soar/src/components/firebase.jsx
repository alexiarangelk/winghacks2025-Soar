// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiCtfNiuOvrI-TORUry-t6VQbBMyR_ZSE",
  authDomain: "soar-f7910.firebaseapp.com",
  projectId: "soar-f7910",
  storageBucket: "soar-f7910.firebasestorage.app",
  messagingSenderId: "190239307923",
  appId: "1:190239307923:web:10c7378c7701162a12f566",
  measurementId: "G-W28QBPKZFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;