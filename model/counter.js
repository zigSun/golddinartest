var mongoose = require('mongoose');
mongoose.set('debug', true);

var counterSchema = new mongoose.Schema({
    counter : Number,
    name : String
});

module.exports  = mongoose.model('Counter', counterSchema);