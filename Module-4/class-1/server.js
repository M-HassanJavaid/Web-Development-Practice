import express from "express";
import fs from 'fs/promises';

const app = express();

app.listen('900' , ()=>{
    console.log(`server is running on http://localhost:900`)
});

app.get('/' , (req , res)=>{
    res.send('<h1>Hello World</h1>')
});

app.get('/createFile' , (req , res)=>{
    fs.writeFile('request.txt' , 'request has revieved')
    .then(()=> res.send('file has created'))
    .catch(()=> res.send('some error occured'))
})

// app.get('/open' , (req , res)=>{
//     fs.open('request.txt' , 'w')
// })

// fs.open('/open' , (req , res)=>{
//     fs.open('request.txt' , 'w')
//     .then()
// })