const fs = require('fs')
var express = require('express');
var router = express.Router();
const path = require('path');

const TITLE = "Nature Disrupted"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: TITLE});
});

/* GET resume. */
router.get('/resume', function(req, res) {
	let filename = "/KevinBagnatoResume sept 2023.pdf";
	res.sendFile(__dirname + '//' + filename);
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

// TODO move to api.js
/* GET 3500 peak list */
router.get('/api/CatsPeaks', function(req, res, next) {
  let filepath = path.resolve('./public/cats35.json');
  let peaks = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  res.json(peaks);
})

module.exports = router;
