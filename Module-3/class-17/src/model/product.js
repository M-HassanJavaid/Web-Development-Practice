const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        minlength : 10
    }
},
{
    collection: 'Products',
    timestamps: true
});

const product = mongoose.model('product' , productSchema);

module.exports = {
    product
}