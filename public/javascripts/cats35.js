var map;

$('document').ready(function() {
  getCatsPeaks();
    initMapbox();
});

function getCatsPeaks() {
  let result;
  
  $.ajax({
    url: '/api/CatsPeaks',
    type: 'GET',
    success: function (data) {
      result = data;
      console.log(result);
    },
    error: function (error) {
      console.log('Error: ' + error);
    }
  });
}

function initMapbox() {
    
    // init mapbox on page
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFnYWRvbnV0cyIsImEiOiJja2tzbnVyMDMwbnIyMnhxbWVxdnRoc3Z1In0.IXWNtJpEBnXTXDyKVVRC5w';
    
    // define map on page
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
        // style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
        center: [-74.53, 42.08],
        zoom: 9.17
        // pitch: 75,
        // bearing: 120
    });

    map.on('style.load', addTracks);
}

function addTracks() {
    // add external geojson (from caltopo) to map
    var url = 'tracks/catskills/WCS.json'
    map.addSource('route', { type: 'geojson', data: url });

    // add trail
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
    });
}

function updateInfo() {
    var center = map.getCenter();
    $('#center').text("Center: " + center);

    var zoom = map.getZoom();
    $('#zoom').text("Zoom: " + zoom);
}