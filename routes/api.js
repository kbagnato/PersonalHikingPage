const fs = require('fs')
var express = require('express');
var router = express.Router();

const geojsonHelper = require('../server_helpers/geojsonHelper');

/* GET 3500 peak list */
router.get('/CatPeaks', function(req, res, next) {
  let filepath = path.resolve('./public/cats35.json');
  let peaks = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  res.json(peaks);
});

/* GET Catskills GeoJSON tracks */
router.get('/CatTracks', function(req, res, next) {
  let catTracks = geojsonHelper.combineGeoTracks(geojsonHelper.loadCatTracks());
  res.json(catTracks);
});

module.exports = router;