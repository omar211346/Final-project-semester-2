// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6GugTdkLtueCK2uGV7YxW-xWN0es8rUM",
  authDomain: "oppskriftshub.firebaseapp.com",
  projectId: "oppskriftshub",
  storageBucket: "oppskriftshub.appspot.com",
  messagingSenderId: "348966582683",
  appId: "1:348966582683:web:38d8e12eb1eef60b75493e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
