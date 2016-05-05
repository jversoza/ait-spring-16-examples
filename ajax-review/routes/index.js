var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/foo', function(req, res, next) {
  res.send(req.body.bar);
});

module.exports = router;
