var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');

/*
router.get('/movies', function(req, res) {
  var movieFilter = {};
  var searchExists = false;
  if(req.query.director) {
    movieFilter.director = req.query.director; 
    searchExists = true;
  }
 
  Movie.find(movieFilter, function(err, movies, count) {
    res.render('movies', {'movies': movies, searchExists: searchExists, director: req.query.director });
  });
});
*/

router.post('/movies/create', function(req, res) {
  (new Movie({
      title: req.body.movieTitle,
      director: req.body.movieDirector,
      year: req.body.movieYear
  })).save(function(err, movie, count) {
    res.redirect('/movies');
  });
});


router.get('/movies/create', function(req, res) {
  res.render('movies-create', {}); 
});

router.post('/api/movie', function(req, res) {
  console.log(req.body);
  (new Movie({
      title: req.body.title,
      director: req.body.director,
      year: +(req.body.year)  
  })).save(function(err, movie, count) {
    console.log(err);
    console.log(movie);
    res.send({'movie':movie});
  });
});

router.get('/movies', function(req, res) {
  Movie.find({}, function(err, movies, count) {
    res.render('movies', {movies: movies});
  });
});

router.get('/api/movies', function(req, res) {
  var movieFilter = {};
  var searchExists = false;
  if(req.query.director) {
    movieFilter.director = req.query.director; 
    searchExists = true;
  }
 
  Movie.find(movieFilter, function(err, movies, count) {
    //res.render('movies', {'movies': movies, searchExists: searchExists, director: req.query.director });
    res.send(movies);
  });
});

module.exports = router;
