const fs = require('fs')
var express = require('express');
var router = express.Router();

const TITLE = "Bagadonuts Hiking"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: TITLE});
});

/* GET gear page. */
router.get('/gear', function(req, res, next) {
  var gearFile = fs.readFileSync('public/gearList.json');
  var gearList = JSON.parse(gearFile);
  res.render('gear', { title: TITLE, gear: gearList });
});

/* GET cats 35 attempt page. */
router.get('/cats35', function(req, res, next) {
  var catsFile = fs.readFileSync('public/cats35.json');
  var catsList = JSON.parse(catsFile);
  res.render('cats35', { title: TITLE, peakList: catsList });
});

/* GET Smokies April 21 page. */
router.get('/smokiesApril21', function(req, res, next) {
  res.render('smokiesApril21', { title: TITLE });
});

/* GET astrophotography page. */
router.get('/astro', function(req, res, next) {
  res.render('astro', { title: TITLE });
});

/* GET About website page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: TITLE });
});

module.exports = router;
