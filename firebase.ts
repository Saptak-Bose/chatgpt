import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN5hZ73e6fJtCWNGAg24SJiMqqfeiO0cg",
  authDomain: "chatgpt-6707e.firebaseapp.com",
  projectId: "chatgpt-6707e",
  storageBucket: "chatgpt-6707e.appspot.com",
  messagingSenderId: "974080193537",
  appId: "1:974080193537:web:b8a6e4bd6a2ee3606d7c00",
  measurementId: "G-TBN386FHZQ",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
