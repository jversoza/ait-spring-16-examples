var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Message = mongoose.model("Message");

// method?
// path?

// GET
// api/messages
//
// POST
// api/message

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function(req, res) {
  res.send( [ {"message": "hello!"}, {"message": "how are you?"} ]);
});

router.get('/api/messages', function(req, res) {
  Message.find({}, function(err, messages, count) {
    res.json(messages);
  });
});

router.post('/api/message', function(req, res) {
  var incomingMsg = req.body.message;
  console.log("Got POST", req.body);
  var msg = new Message({
    text: incomingMsg, 
    dateSent: Date.now()
  });

  msg.save(function(err, savedMsg, count){
    if(err) {
        res.json({result: undefined, error: true});
    } else {
        res.json({result: count, error: false});
    }
  })
});




module.exports = router;








