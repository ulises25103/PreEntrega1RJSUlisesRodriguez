import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDhKrLnitXRbN8BHzxIszLfzXvqz0P0630",
  authDomain: "proyectofinalreact-35b9c.firebaseapp.com",
  projectId: "proyectofinalreact-35b9c",
  storageBucket: "proyectofinalreact-35b9c.appspot.com",
  messagingSenderId: "161272421411",
  appId: "1:161272421411:web:641fa070b2f41de4206596"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()