var mongoose = require('mongoose');

var Message = new mongoose.Schema({
        text: String,
        dateSent: Date
});

mongoose.model('Message', Message);
mongoose.connect('mongodb://localhost/class23/');
