// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCisXWI8HKtk6RU_kYmrjbXvJ2VEw67bz0",
  authDomain: "student-management-a8a4d.firebaseapp.com",
  projectId: "student-management-a8a4d",
  storageBucket: "student-management-a8a4d.appspot.com",
  messagingSenderId: "868525341933",
  appId: "1:868525341933:web:dfc356e10920ce35b4a0e4",
  measurementId: "G-W8JDBKC2SB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
 
const db = getFirestore();

export{db};