const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { MongoClient } = require('mongodb');
// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// connecting mongoDB

const url = "mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/";
const client = new MongoClient(url);

// database name
const dbName = 'LearnMongoDB';


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const StudentsCollection = db.collection('students');

    //& insert data to collection

    //   let data = [
    //     {
    //         name: 'hassan',
    //         age: 17
    //     },
    //     {
    //         name : 'affan',
    //         age: 12
    //     }
    //   ]

    //   const insertReasult = await StudentsCollection.insertMany(data)

    //   console.log(insertReasult)

    //& get Data all data from a collection

    // const findResult = await StudentsCollection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    //& get data on query

    const filteredDocs = await StudentsCollection.find({ name: 'hassan' }).toArray();
    console.log('Found documents filtered by { a: 3 } =>', filteredDocs);








    return 'done.';
}



main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());



// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});