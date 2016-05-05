var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get(/class\d+/, function(req, res, next) {
    res.send("we are in class")
});
/*
/jam
/jem
/jaaaaam
/jingoism
jm
*/
router.get(/^\/j\w+m$/, function(req, res, next) {
    res.send("it works")
});

router.get('/testparams/:var1/:var2', function(req, res, next) {
    res.send(req.params.var1 + ' ' + req.params.var2);
    if(req.params.var1 == 'hello'){
        // res.render(...)
    } else {
        // render another
    }
});


module.exports = router;
