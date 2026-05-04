import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEqxUL2x23N4d0G7jANfY4il_RhlDjX14",
  authDomain: "student-progress-tracker-f2aa3.firebaseapp.com",
  projectId: "student-progress-tracker-f2aa3",
  storageBucket: "student-progress-tracker-f2aa3.firebasestorage.app",
  messagingSenderId: "626319769711",
  appId: "1:626319769711:web:a22757ef5681660b618d9a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);