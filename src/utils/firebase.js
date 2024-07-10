// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6ab9e02EPCPBbZrUeuBDiribXtTghdmI",
  authDomain: "netflixgpt-111001.firebaseapp.com",
  projectId: "netflixgpt-111001",
  storageBucket: "netflixgpt-111001.appspot.com",
  messagingSenderId: "675249959004",
  appId: "1:675249959004:web:08ca3ccfce9642e3a9f699",
  measurementId: "G-NMDK3DH16N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);