const { MongoClient } = require('mongodb');

async function connectToDb() {
    const url = "mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/";
    const client = new MongoClient(url);
    const dbName = 'TodoListWeb';
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db
}

async function disConnectDb() {
    const url = "mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/";
    const client = new MongoClient(url);
    await client.close();
    console.log('disconnect successfully!')
}

module.exports = {
    connectToDb,
    disConnectDb
}