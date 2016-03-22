var mongoose = require('mongoose');

var Cat = new mongoose.Schema({
    name: {type: String, required: true},
    lives: {type: Number, max:[9, '{PATH} too many lives!']},
    cuteness: Number
});

//protocol is mongodb
//host is localhost
//path is db name
mongoose.model('Cat', Cat);
mongoose.connect('mongodb://localhost/mongoosereview');

Cat = mongoose.model("Cat");
var c = new Cat({
    name: 'foo',
    lives: 5,
    cuteness:1000

});

/*
c.save(function(err, savedCat, count) {
    console.log(err, savedCat, count);
});
*/
Cat.find({}, function(err, cats, count){
    //console.log(err, cats, count);
    console.log(cats[0].name);
})

c.save(function(err, savedCat, count) {
    console.log(err, savedCat, count);
});
