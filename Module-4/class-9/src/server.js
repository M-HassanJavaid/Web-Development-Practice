const express = require('express');
const app = express();

app.use(express.json())

app.get('/' , (req , res)=>{
    res.send('<h1> Hello from Server <h1/>')
});

app.post('/addProduct' , (req , res)=>{
    console.log(req.body)
    res.status(200).json({
        message: 'Product Added Succesfully!'
    });
})

app.get('/user' , (req , res)=>{
    res.send({
        name: 'hassan',
        age: 17
    })
})

app.listen('900' , ()=>{
    console.log(`Server is running on http://localhost:900`)
})