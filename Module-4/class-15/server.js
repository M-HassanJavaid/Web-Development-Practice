const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/';
const client = new MongoClient(url);

// Database Name
// const dbName = 'myProject';

app.get('/addStudent/:name/:age', async (req, res) => {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        let age = req.params.age;
        let name = req.params.name;
        const db = client.db('LearnMongoDB');
        const studentsCollection = db.collection('students');
        const insertResult = await studentsCollection.insertOne({
            name: name,
            age: age
        });
        console.log('Inserted documents =>', insertResult);
        res.json(insertResult)

    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    } finally {
        await client.close();
    }
})

app.get('/students', async (req, res) => {
    try {

        await client.connect();
        const db = client.db('LearnMongoDB');
        const studentsCollection = db.collection('students');
        let students = await studentsCollection.find({}).toArray();
        res.json(students);
        console.log('data sent => ' + students);
    } catch (error) {
        res.send(error.message);
        console.error('some error occured!')
    }
})

app.get('/student/:name', async (req, res) => {
    try {
        let name = req.params.name;
        await client.connect();
        const db = client.db('LearnMongoDB');
        const studentsCollection = db.collection('students');
        let student = await studentsCollection.findOne({name : name});
        if (!student) throw new Error('Student not found!'); 
        res.json(student);
        console.log('data sent => ' + student);
    } catch (error) {
        res.send(error.message);
        console.error('some error occured!')
    }
})


