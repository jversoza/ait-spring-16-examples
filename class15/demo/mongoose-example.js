// it allows us to constrain the kinds of documents that we create
// we have to define the properties and their types ... for each "collection" of each documents
//
// the thing that you connect to... is the database name
// schema, constructor --> collection
// object --> document

var mongoose = require('mongoose');
// schema is going to define properties/types for a collection
// your schema name... is going to show up as a lowercase pluralized version as a collection in the actual database

var Cat = new mongoose.Schema({
    // regular javascript types
    name: {type: String, required: true},
    lives: {type: Number, max: 9},
    cuteness: Number
});
// doc will like: {name: 'chairman meow', lives:9, cuteness: 100}
// each of these documents will go into a collection called cats
//                                                             ^ lowercase and plural
// first arg is a string, second is a schema object
mongoose.model('Cat', Cat);

// protocol is mongodb
// host is localhost (because you're mongod on your own machine
// last part of path... is the name of the database
// if you use the commandline client... use class15demo to access db
mongoose.connect('mongodb://localhost/class15demo');

// databases and collections and documents get automatically created
// when you insert a document

// inserting a document
// retrieve the model
// this gives us a constructor to make Cat objects
/*
Cat = mongoose.model('Cat')
var c = new Cat({
    name: 'chairman meow',
    lives: 9,
    cuteness: 100,
})

c.save(function(err, savedCat, count){
    console.log(err);
    console.log(savedCat);
    console.log(count);
});
*/

/*
Cat = mongoose.model('Cat')
Cat.find({}, function(err, queryResult, count){
    console.log(err);
    console.log(queryResult);
    console.log(count);

})

*/

Cat = mongoose.model('Cat')
c = new Cat({
    lives: 20,
    cuteness: 100,
})

c.save(function(err, savedCat, count){
    console.log(err);
    console.log(savedCat);
    console.log(count);
});
