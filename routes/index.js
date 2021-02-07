var express = require('express');
var router = express.Router();

const TITLE = "Bagadonuts Hiking"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: TITLE});
});

/* GET Smokies Apeil 21 page. */
router.get('/smokiesApril21', function(req, res, next) {
  res.render('smokiesApril21', { title: TITLE });
});

/* GET About website page. */
router.get('/aboutWebsite', function(req, res, next) {
  res.render('aboutWebsite', { title: TITLE });
});

module.exports = router;
