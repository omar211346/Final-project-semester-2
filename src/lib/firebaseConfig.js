
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6GugTdkLtueCK2uGV7YxW-xWN0es8rUM",
  authDomain: "oppskriftshub.firebaseapp.com",
  projectId: "oppskriftshub",
  storageBucket: "oppskriftshub.appspot.com",
  messagingSenderId: "348966582683",
  appId: "1:348966582683:web:38d8e12eb1eef60b75493e"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
