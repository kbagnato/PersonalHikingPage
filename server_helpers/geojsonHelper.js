// -------------------------------------
// server-side file processing for geojson tracks
// -------------------------------------

const fs = require('fs');
const path = require('path');

/* load Catskill Tracks from local files */
function loadCatTracks() {
  let trackFiles = [];
  let trackNames = fs.readdirSync(path.resolve('./public/tracks/catskills/'));
  
  // load files into memory
  for (i in trackNames) {
    let filepath = path.resolve('./public/tracks/catskills/' + trackNames[i]);
    trackFiles.push(JSON.parse(fs.readFileSync(filepath, 'utf8')));
  }

  return trackFiles;
}

function combineGeoTracks(tracks) { 
  let allTracks = {
    'type' : 'FeatureCollection',
    'features' : []
  };
  
  for (idx in tracks) {
    allTracks = {
      'type' : 'FeatureCollection',
      'features' : allTracks.features.concat(tracks[idx].features)
    }
  }

  return allTracks;
}

module.exports = { loadCatTracks, combineGeoTracks };