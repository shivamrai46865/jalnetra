// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, query, where, orderBy, serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged,
  GoogleAuthProvider, signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8YHfO5zdcOd7a6vrFVLqF0_yH6-LZVTc",
  authDomain: "jalnetra-ss.firebaseapp.com",
  projectId: "jalnetra-ss",
  storageBucket: "jalnetra-ss.firebasestorage.app",
  messagingSenderId: "574025551617",
  appId: "1:574025551617:web:fc7ddea85deb385b70d500"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { 
  collection, addDoc, getDocs, doc, getDoc, updateDoc, query, where, orderBy, serverTimestamp,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged,
  signInWithPopup 
};