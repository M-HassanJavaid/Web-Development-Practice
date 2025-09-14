const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with 2.4GHz connection",
        price: 19.99,
        category: "Electronics",
        inStock: true,
        rating: 4.3
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard with blue switches",
        price: 59.99,
        category: "Electronics",
        inStock: true,
        rating: 4.7
    },
    {
        id: 3,
        name: "Running Shoes",
        description: "Lightweight running shoes with breathable fabric",
        price: 79.99,
        category: "Sportswear",
        inStock: false,
        rating: 4.5
    },
    {
        id: 4,
        name: "Coffee Maker",
        description: "12-cup programmable coffee maker with auto-shutoff",
        price: 39.99,
        category: "Home Appliances",
        inStock: true,
        rating: 4.1
    },
    {
        id: 5,
        name: "Backpack",
        description: "Water-resistant laptop backpack with USB charging port",
        price: 29.99,
        category: "Accessories",
        inStock: true,
        rating: 4.6
    }
];

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/product/:id', (req, res) => {
    let id = req.params.id;
    let product = products.find(product => product.id === parseInt(id))
    if (product) {
        res.status(200).send(product)
    } else {
        res.status(404).send('Product not found!')
    }
});

app.use('/products', (req, res) => {
    res.send(products)
})




let OriginalPassword = 'hassan.92'

app.use('/signup/:password', (req, res, next) => {
    let password = req.params.password;
    if (password === OriginalPassword) {
        next()
    } else {
        res.status(401).send('Unauthorized Access')
    }
}, (req, res) => {
    console.log('user is authorized!');
    res.send('you have successfully signuped!')
})


app.use('/hello', (req, res) => {
    res.send(`Hello from app.use , i am a ${req.method} request!`)
    // app.use match first letters of letter of route an response
    //here we can apply different according to if else conditions on req.method
    // we should keep it below in the code
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.use('/', (req, res) => {
    res.send('I am a single slash')
});