import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5zQGE6aD9VODqLtQLkbP50WHa9-1hqAs",
  authDomain: "bolt-47361.firebaseapp.com",
  projectId: "bolt-47361",
  storageBucket: "bolt-47361.appspot.com",
  messagingSenderId: "21728578120",
  appId: "1:21728578120:web:650c5e04b3cfa690d2a67d",
  measurementId: "G-0NNCYPDM4B"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 


ReactDOM.createRoot(document.getElementById("root")).render(<App />);



