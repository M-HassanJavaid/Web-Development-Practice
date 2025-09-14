const { connectToDb } = require('./config/db.js')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { User } = require('./model/user.js')

app.use( '/addUser', async (req, res) => {
  console.log(req.body)
});

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start server

(async () => {
  await connectToDb();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})()