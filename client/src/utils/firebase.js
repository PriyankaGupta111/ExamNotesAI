
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-5dd8e.firebaseapp.com",
  projectId: "authexamnotes-5dd8e",
  storageBucket: "authexamnotes-5dd8e.firebasestorage.app",
  messagingSenderId: "876507426842",
  appId: "1:876507426842:web:77b323087a784ab5c8a1a3"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}