const mongoose = require('mongoose');

async function connectToDB() {
    let db = await mongoose.connect('mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/LearnMongoDB');
    return db
}

module.exports = {
    connectToDB
}

