import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUQKfVZ0sEjEwrKXi4tlduG1DSHtGxpgQ",
  authDomain: "devfest-22-registrations.firebaseapp.com",
  projectId: "devfest-22-registrations",
  storageBucket: "devfest-22-registrations.appspot.com",
  messagingSenderId: "329089402018",
  appId: "1:329089402018:web:d89b84a727fe699b10c3fb",
  measurementId: "G-LETGC6D44G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((error) => {});
};


