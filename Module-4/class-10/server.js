const express = require('express');
const app = express();

app.listen('900' , ()=>{
    console.log('http://localhost:900')
})

app.get('/product/:id' , (req , res)=>{
    let id = req.params.id;
    res.send('Your product id is ' + id)
})