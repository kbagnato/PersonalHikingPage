const fs = require('fs')
var express = require('express');
var router = express.Router();

const TITLE = "Bagadonuts Hiking"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: TITLE});
});


/* GET resume. */
router.get('/resume', function(req, res, next) {
	res.render('resume', { title: TITLE});
  });

/* GET gear page. */
router.get('/gear', function(req, res, next) {
  var gearFile = fs.readFileSync('public/gearList.json');
  var gearList = JSON.parse(gearFile);
  res.render('gear', { title: TITLE, gear: gearList });
});

/* GET cats 35 attempt page. */
router.get('/cats35', function(req, res, next) {
  // include list of high peaks
  var catsFile = fs.readFileSync('public/cats35.json');
  var catsList = JSON.parse(catsFile);
  
  // include list of tracks to pug = how do I get it to cats35.js?
  var tracks = fs.readdirSync('public/tracks/catskills')
  
  res.render('cats35', { title: TITLE, peakList: catsList, hikes: tracks });
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
