var mongoose = require('mongoose');

var counterSchema = new mongoose.Schema({
    counter : Number
});

module.exports  = mongoose.model('Counter', counterSchema);