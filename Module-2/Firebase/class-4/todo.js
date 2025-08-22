let todoContainer = document.querySelector('#todo-container');
let todoBtn = document.querySelector('#addToDo');
let todoInput = document.querySelector('#input-todo');

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js"


const firebaseConfig = {
    apiKey: "AIzaSyCvg6cVrAOUTQb82Zf4XaUR_8O4D47U0Yg",
    authDomain: "first-trial-706ca.firebaseapp.com",
    databaseURL: "https://first-trial-706ca-default-rtdb.firebaseio.com",
    projectId: "first-trial-706ca",
    storageBucket: "first-trial-706ca.firebasestorage.app",
    messagingSenderId: "503325588183",
    appId: "1:503325588183:web:20559a90d3292605b20e92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let todoCollection = collection(db , 'TodoList')

todoBtn.addEventListener('click' , async (e)=>{
    let Id = (new Date).getTime().toString()
    e.preventDefault();
    await setDoc(doc(db , "TodoList" , Id) , {
        task: todoInput.value,
        id: Id
    })
    alert('task has created!')
})

async function recieveData() {
    const querySnapshot = getDocs(todoCollection);
    let Tasks = querySnapshot.map(()=>{
        return // continue
    })
}