// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-V4NZpoRyP0RD-yi2SaNfM2r4fIfdNtk",
  authDomain: "netfluxgpt.firebaseapp.com",
  projectId: "netfluxgpt",
  storageBucket: "netfluxgpt.appspot.com",
  messagingSenderId: "916562107003",
  appId: "1:916562107003:web:45a5741f3b9cc3ad0da0de",
  measurementId: "G-D0JT116TPC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
