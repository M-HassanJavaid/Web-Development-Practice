const dbUri = 'mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/LearnMongoose';
const mongoose = require('mongoose')

async function connectToDb() {
    try {
        await mongoose.connect()
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    connectToDb
}