const { MongoClient } = require('mongodb');
const url = "mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/";
const client = new MongoClient(url);

async function connectToDb() {
    const dbName = 'TodoListWeb';
    await client.connect();
    const db = client.db(dbName);
    console.log('Connected successfully to server');
    return db
}

module.exports = {
    connectToDb,
}