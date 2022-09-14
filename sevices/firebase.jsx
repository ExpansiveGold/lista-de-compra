// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwnyScSGiEEtxpQzOJyQO6elMNwlqiwPY",
  authDomain: "lista-de-compra-b8b4f.firebaseapp.com",
  projectId: "lista-de-compra-b8b4f",
  storageBucket: "lista-de-compra-b8b4f.appspot.com",
  messagingSenderId: "656497375042",
  appId: "1:656497375042:web:7c5b69307367fa748f7adb",
  measurementId: "G-JC69Z2D9BF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

const analytics = getAnalytics(app);