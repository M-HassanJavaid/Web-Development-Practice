const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
    }
},
{
    collection: 'user',
    timestamps: true
}
);

const User =  mongoose.model('User' , userSchema);

module.exports={
    User
}