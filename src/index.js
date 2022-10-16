import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// Pages
import App from './App';
import Timer from './Pages/Timer';
import Welcome from './Pages/Welcome';
// Components
import NavBar from './Pages/Navbar';
// Firebase
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="timer" element={<Timer />} />
        <Route path="app" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// firebase deploy --only hosting
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0v3KLeyqMyMCZLKsVWkpVWwSvryhb3uQ",
  authDomain: "studablity.firebaseapp.com",
  projectId: "studablity",
  storageBucket: "studablity.appspot.com",
  messagingSenderId: "816484610521",
  appId: "1:816484610521:web:1c27dabc9b301f8851e9c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);