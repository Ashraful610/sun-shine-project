// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQp3MsG_ayGzwaJpeTrbPYkbR3AS5Rg8g",
  authDomain: "sun-shine-project-1ff38.firebaseapp.com",
  projectId: "sun-shine-project-1ff38",
  storageBucket: "sun-shine-project-1ff38.appspot.com",
  messagingSenderId: "294048843494",
  appId: "1:294048843494:web:4546ebe099aa2d6251dd27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;