// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2E1rODJ5-rmcmSvkCsZcd0Y18PUZ9RaQ",
  authDomain: "assignment-12-4b731.firebaseapp.com",
  projectId: "assignment-12-4b731",
  storageBucket: "assignment-12-4b731.appspot.com",
  messagingSenderId: "711716171865",
  appId: "1:711716171865:web:a7c92091c16346ded4c148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;