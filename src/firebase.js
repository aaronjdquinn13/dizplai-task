
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore"; // importing what I need from firebase

// Can also add authenciation from firebase for login making the poll more secure 

// Firebase details
const firebaseConfig = {
  apiKey: "AIzaSyAt2NLj8XhQipX7aKZrCEGCKcKzYoYdRjA",
  authDomain: "dizplai-ef901.firebaseapp.com",
  projectId: "dizplai-ef901",
  storageBucket: "dizplai-ef901.firebasestorage.app",
  messagingSenderId: "445602635910",
  appId: "1:445602635910:web:a88dcbb2fcb6138ca7b107",
  measurementId: "G-ZVZXNHWNFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance

// Export the Firestore instance
export { db, collection, addDoc, serverTimestamp, getDocs };