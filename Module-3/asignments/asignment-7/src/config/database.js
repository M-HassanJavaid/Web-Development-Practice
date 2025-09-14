const mongoose = require('mongoose')

const uri = 'mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/LearnMongoose'


async function connectDB() {
    await mongoose.connect(uri)
}


module.exports = {
    connectDB
}