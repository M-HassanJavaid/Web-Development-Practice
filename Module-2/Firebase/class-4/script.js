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

//* It will add a new doc to collection and generate auto ID
// const docRef = await addDoc(collection(db, "users"), {
//   name: "Hassan",
//   age: 20
// });
// console.log("Document ID:", docRef.id);


//* It will set existing document. the {merge: true} is used when we don't want to overrdide other fields otherwise it will override whole doc
// await setDoc(doc(db, "users", "hassan123"), {
//   name: "Hassan",
//   age: 20
// } , {merge: true});

