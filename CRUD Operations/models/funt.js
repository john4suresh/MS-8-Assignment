const mongoose = require('mongoose');

const Fun = new mongoose.Schema({
    name : String,
    price : Number,
    isAvailable : Boolean
});


module.exports = mongoose.model('fun',Fun);