// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI8TlDDXL5jPrNYm35Ygg7mHwuPoVEUYs",
  authDomain: "genius-car-services2-602e9.firebaseapp.com",
  projectId: "genius-car-services2-602e9",
  storageBucket: "genius-car-services2-602e9.appspot.com",
  messagingSenderId: "870915814709",
  appId: "1:870915814709:web:5ba6f977cc8f374858087c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;