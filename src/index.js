import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDeL6RK6hMGcqN3DFWXrBCtRvXmtZNVNvA",
  authDomain: "cart-123.firebaseapp.com",
  projectId: "cart-123",
  storageBucket: "cart-123.appspot.com",
  messagingSenderId: "479013835853",
  appId: "1:479013835853:web:8570637a7af91993b0b804"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



//reportWebVitals();


