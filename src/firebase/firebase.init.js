// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtvpg_Nir4calrthwNfSKzjfUxmKWSl_0",
  authDomain: "friends-mela.firebaseapp.com",
  projectId: "friends-mela",
  storageBucket: "friends-mela.firebasestorage.app",
  messagingSenderId: "11236961120",
  appId: "1:11236961120:web:208e579a5ee078459c4c05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
