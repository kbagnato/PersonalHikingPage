var map;
var highPeaks;
var catTracks;

$('document').ready(function() {
  initMapbox();
  highPeaks = getCatPeaks();
  catTracks = getCatTracks();
});

/* get one file with all Catskill tracks */
function getCatTracks() {  
  $.ajax({
    url: '/api/CatTracks',
    type: 'GET',
    success: function (data) {
      addTrack(data);
      return data;
    },
    error: function (error) {
      console.log('Error: ' + error);
    }
  });
}

/* get Catskills High Peaks list */
function getCatPeaks() {  
  $.ajax({
    url: '/api/CatPeaks',
    type: 'GET',
    success: function (data) {
      return data;
    },
    error: function (error) {
      console.log('Error: ' + error);
    }
  });
}

/* init mapbox on page */
function initMapbox() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmFnYWRvbnV0cyIsImEiOiJja2tzbnVyMDMwbnIyMnhxbWVxdnRoc3Z1In0.IXWNtJpEBnXTXDyKVVRC5w';
  
  // define map on page
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11', // terrain
    // style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',  // satelite
    center: [-74.35, 42.08],
    zoom: 9.17
    // pitch: 75,
    // bearing: 120
  });
}

/* add given data to map */
function addTrack(data) {
  map.on('load', function() {
    map.addSource('route', { type: 'geojson', data: data });
    map.addLayer({
        'id': 'trail',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#543ff2',
            'line-width': 4
        }
    })
  });
}

function updateInfo() {
    var center = map.getCenter();
    $('#center').text("Center: " + center);

    var zoom = map.getZoom();
    $('#zoom').text("Zoom: " + zoom);
}