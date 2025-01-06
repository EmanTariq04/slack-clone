// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC_Q2zdeevonrb7tIXuLKxM02Df8PIx-8",
  authDomain: "slack-clone-a4b76.firebaseapp.com",
  projectId: "slack-clone-a4b76",
  storageBucket: "slack-clone-a4b76.firebasestorage.app",
  messagingSenderId: "940543921523",
  appId: "1:940543921523:web:86fd278e3a2e4d25388906",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
