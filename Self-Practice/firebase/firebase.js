//! initailize firebase

// Import the functions you need from the SDKs you need

// Import the core Firebase App module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

// Import the Firebase Authentication module
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


//Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvg6cVrAOUTQb82Zf4XaUR_8O4D47U0Yg",
  authDomain: "first-trial-706ca.firebaseapp.com",
  projectId: "first-trial-706ca",
  storageBucket: "first-trial-706ca.firebasestorage.app",
  messagingSenderId: "503325588183",
  appId: "1:503325588183:web:20559a90d3292605b20e92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// console.log(app)

//! Authentication

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function Signup() {
  createUserWithEmailAndPassword(auth , 'affanjavaid8@gmail.com' , 'hassan.92')
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
}
Signup()

// document.querySelector('#Signup').addEventListener('click' , Signup)


