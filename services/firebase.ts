// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx-13xMtikf8tKmKAvGwLuRZ7IUPIsuBw",
  authDomain: "teste-upload-e022f.firebaseapp.com",
  projectId: "teste-upload-e022f",
  storageBucket: "teste-upload-e022f.appspot.com",
  messagingSenderId: "66714067743",
  appId: "1:66714067743:web:97072d1e73ccfae795862a",
  measurementId: "G-S1HK6KN111",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
