var express = require('express');
var router = express.Router();

// /foo/test
router.get('/test', function(req, res) {
  res.render('test');
});

module.exports = router;
