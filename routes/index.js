var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Smokies Apeil 21 page. */
router.get('/smokiesApril21', function(req, res, next) {
  res.render('smokiesApril21', { title: 'Express' });
});

/* GET About website page. */
router.get('/aboutWebsite', function(req, res, next) {
  res.render('aboutWebsite', { title: 'Express' });
});

module.exports = router;
