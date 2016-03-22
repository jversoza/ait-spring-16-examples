var mongoose = require('mongoose');
var Cat = new mongoose.Schema({
    // regular javascript types
    name: {type: String, required: true},
    lives: {type: Number, max: 9},
    cuteness: Number
});
mongoose.model('Cat', Cat);

mongoose.connect('mongodb://localhost/class15demo');

