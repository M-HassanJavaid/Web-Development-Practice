const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { connectToDb } = require('./config/db.js')
const { product } = require("./model/product.js")


// Middleware
app.use(express.json());

app.use('/addProducts', async (req, res) => {

  try {
    let newProduct = await product.insertMany(req.body);
    console.log(newProduct)
    res.send(newProduct)
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message)
  }
})

app.use('/addProduct', async (req, res) => {

  try {
    let newProduct = new product(req.body);
    let productResponse = await newProduct.save();
    console.log(productResponse)
    res.send(productResponse)
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message)
  }
})



// Routes
app.use('/', (req, res) => {
  res.send('Hello, Express!');
});

(async () => {
  try {
    await connectToDb();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error.message)
  }
})();