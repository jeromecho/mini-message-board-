var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "RADICAL!",
     user: "Kevin",
     added: new Date()
   },
   {
     text: "Squiggly Squids!",
     user: "Joana",
     added: new Date()
   },
   {
     text: 'OO-EE-OO',
     user: 'Hatsune Miku',
     added: new Date(),
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', function(req, res, next) {
    res.render('form');
});

router.post('/new', function(req, res, next) {
    messages.push({text: req.body.message, user: req.body.author, added: new Date()});
    res.redirect('/');
})

module.exports = router;
