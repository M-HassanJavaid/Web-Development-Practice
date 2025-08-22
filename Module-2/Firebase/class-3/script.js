import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCvg6cVrAOUTQb82Zf4XaUR_8O4D47U0Yg",
  authDomain: "first-trial-706ca.firebaseapp.com",
  projectId: "first-trial-706ca",
  storageBucket: "first-trial-706ca.appspot.com",
  messagingSenderId: "503325588183",
  appId: "1:503325588183:web:20559a90d3292605b20e92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a document
const collectionRef = collection(db, "SMIT-Admission");

addDoc(collectionRef, {
  name: "affan",
  cnic: "4220208439444",
  age: 15
}).then((docRef) => {
  console.log("Document written with ID:", docRef.id);
}).catch((error) => {
  console.error("Error adding document:", error);
});

// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan"
// });
// console.log("Document written with ID: ", docRef.id);
