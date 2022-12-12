// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4fAqVv_frOq2svUWFG12igEItIcql8hc",
  authDomain: "prescricao-de-treinamento.firebaseapp.com",
  projectId: "prescricao-de-treinamento",
  storageBucket: "prescricao-de-treinamento.appspot.com",
  messagingSenderId: "26109933565",
  appId: "1:26109933565:web:2132fef337c197dab68b94",
  measurementId: "G-7KZG9CJ4YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

var firebase = require('firebase');
var firebaseui = require('firebaseui');

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});