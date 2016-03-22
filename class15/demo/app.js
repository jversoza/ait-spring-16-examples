var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'hbs');

// mongoose setup
// ======
// equivalent of copying and pasting all of the code in db.js
// right here...
require('./db.js');

// must go after requiring db.js
var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');

// show all of the cats in the database
// the list will be at /cats
// use find... but where do we do that? in the route handler...
app.get('/cats', function(req, res) {
    Cat.find({}, function(err, cats, count) {
        console.log(cats); 
        res.render('cats', {cats:cats, msg:'this string'});
    });
});

// adding cats
// =====
// some steps:
// 1. we'll need a form
// 2. we'll need a request handler that retrieves the form
// 3. we'll need a request handler that deals with a post from the form
//   ... it'll receive data
//   ... it'll insert stuff into database
// 4. make sure database setup is present (in this case it is, because we listed cats)
app.get('/cats/add', function(req, res) {
  res.render('cats-add');
});

app.post('/cats/add', function(req, res) {
  console.log(req.body);

  var myCat = new Cat({
    name: req.body.catname,
    lives: req.body.lives,
    cuteness: req.body.cuteness
  });

  myCat.save(function(err, savedCat, count) {
      if(!err) {
        res.redirect('/cats');
      } else {
        // for errors, we're just sending back to client
        // ... instead, we should re-render the form
        // ... and include the error message
        console.log(err); 
        res.send(err);
      }
  })
});

app.listen(3000)




