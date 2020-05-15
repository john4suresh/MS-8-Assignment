const mongoose = require('mongoose');

const Dress = new mongoose.Schema({
    name : String,
    price : Number,
    isAvailable : Boolean
});


module.exports = mongoose.model('dress',Dress);