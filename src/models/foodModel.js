const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//deifindo produto
const FoodSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

const Food = mongoose.model('Food',FoodSchema);
module.exports = Food;