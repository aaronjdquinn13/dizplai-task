// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);