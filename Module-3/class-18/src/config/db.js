const mongoose = require('mongoose');

async function connectToDb(params) {
    try {
        await mongoose.connect('mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/LearnMongoose')
        console.log('Database has connected!')
    } catch (error) {
        console.log(error.message)
    }
}
module.exports={
    connectToDb
}