const express = require('express');
const {checkAdminAuth} = require('./middleWear.js')
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

let originalPassword = 'hassan.92';
app.use('/user/:password' , (req , res , next)=>{
    console.log(req.params.password)

    if (req.params.password === originalPassword) {
        next()
    } else {
        res.status(401).send('Password is incorrect');
    }

});

app.use('/user' , (req , res)=>{
    res.send('You are authorized')
});

app.use('/admin/getData/:password' , checkAdminAuth , (req , res)=>{
    res.send('here is your data')
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});