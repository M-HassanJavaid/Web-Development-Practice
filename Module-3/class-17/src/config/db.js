const mongoose = require("mongoose");
const uri = "mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/LearnMongoose"

async function connectToDb() {
    try {
        mongoose.connect(uri);
        console.log('Database has connected!')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connectToDb
}