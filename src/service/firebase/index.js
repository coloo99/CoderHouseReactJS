// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaQg-x3RB_1GovEcErkaJqTyzivLrx2tg",
  authDomain: "e-commercereactjs-cf141.firebaseapp.com",
  projectId: "e-commercereactjs-cf141",
  storageBucket: "e-commercereactjs-cf141.appspot.com",
  messagingSenderId: "230116488560",
  appId: "1:230116488560:web:075075c21b6055084f4bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)