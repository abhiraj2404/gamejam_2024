// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCgsRrg1_uqEd3qdGvhISwmKk_ryBMEu3k",
    authDomain: "gamejam-44d18.firebaseapp.com",
    projectId: "gamejam-44d18",
    storageBucket: "gamejam-44d18.firebasestorage.app",
    messagingSenderId: "718351852001",
    appId: "1:718351852001:web:1cf4fc2d611efa7b3c72a0",
    measurementId: "G-CB23SVPXNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };