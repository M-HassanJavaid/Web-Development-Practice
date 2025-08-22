import express from 'express';

import cors from 'cors';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCvg6cVrAOUTQb82Zf4XaUR_8O4D47U0Yg",
    authDomain: "first-trial-706ca.firebaseapp.com",
    projectId: "first-trial-706ca",
    storageBucket: "first-trial-706ca.firebasestorage.app",
    messagingSenderId: "503325588183",
    appId: "1:503325588183:web:20559a90d3292605b20e92"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const expressApp = express();
const PORT = 9090;

// ✅ Allow only frontend at 127.0.0.1:5500
expressApp.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST'], // optional: define allowed HTTP methods
  credentials: true // optional: only if you're using cookies or auth headers
}));

expressApp.use(express.json()); // to parse JSON body


expressApp.post('/createNewUser', (request, response) => {
    const newUserConfig = request.body;
    console.log(newUserConfig)
    createUserWithEmailAndPassword(auth, newUserConfig.email, newUserConfig.password)
    .then((userCredential) => {
        const user = userCredential.user;
        response.status(200).json({
            userName: user.displayName ?? 'unknown',
            UID: user.uid,
            email: user.email,
            ok: true
        });
    })
    .catch((error) => {
        response.status(400).json({
            message: error.message,
            code: error.code,
            ok: false
        })
    });
});

expressApp.get('/' , (request , response)=>{
    response.send('server is running!')
})

expressApp.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});



