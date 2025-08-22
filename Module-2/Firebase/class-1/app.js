// Firebase

// SDK -- Software Developement kit

// Frontend // Developer
// Backend // Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvg6cVrAOUTQb82Zf4XaUR_8O4D47U0Yg",
  authDomain: "first-trial-706ca.firebaseapp.com",
  projectId: "first-trial-706ca",
  storageBucket: "first-trial-706ca.firebasestorage.app",
  messagingSenderId: "503325588183",
  appId: "1:503325588183:web:20559a90d3292605b20e92"
};

// Connect with firebse
const app = initializeApp(firebaseConfig)


// Get instance of authentication
const auth = getAuth(app)

console.log(auth)

let submitBtn = document.querySelector('.submit-btn');
let passwordInput = document.querySelector('#password');
let EmailInput = document.querySelector('#email');

submitBtn.addEventListener('click' , (e)=>{
    e.preventDefault(); 
    createUserWithEmailAndPassword(auth , EmailInput.value , passwordInput.value)
    .then((userInfo)=>{
        alert('You have successfully register');
        console.log(userInfo)
    })
    .catch((error)=>{
        alert('Some error occured!');
        console.log(error)
    })
})

