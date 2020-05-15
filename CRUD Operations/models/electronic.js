const mongoose = require('mongoose');

const Electron = new mongoose.Schema({
    name : String,
    price : Number,
    isAvailable : Boolean
});


module.exports = mongoose.model('electron',Electron);