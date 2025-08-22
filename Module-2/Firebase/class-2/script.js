// Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore , collection , addDoc} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";


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

const db = getFirestore(app) // here we are getting firestore instance

async function addNewProduct(product) {
    try {
        const collectionRef = collection(db , "products")
        const docRef = await addDoc(collectionRef , {
            test: true // continue...
        })
    } catch (error) {
        
    }
}