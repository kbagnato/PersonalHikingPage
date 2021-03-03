var map;

$('document').ready(function () {
    initMapbox();
});

function initMapbox() {
    // init mapbox on page
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFnYWRvbnV0cyIsImEiOiJja2tzbnVyMDMwbnIyMnhxbWVxdnRoc3Z1In0.IXWNtJpEBnXTXDyKVVRC5w';

    // define map on page
    map = new mapboxgl.Map({
        container: 'map',
        // style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
        style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
        center: [-83.75, 35.57],
        zoom: 12.6,
        pitch: 75,
        bearing: 120
    });

    // add map features when loaded
    map.on('style.load', addTracks);
}

// add trail to 
function addTracks() {
    // make map 3d
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.3 });

    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });

    // add external geojson (from caltopo) to source
    var url = 'tracks/Smokies.json'
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

    // add markers
    map.addLayer({
        'id': 'campsites',
        'type': 'circle',
        'source': 'route',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        },
        'filter': ['==', '$type', 'Point']
    });
}

function updateInfo() {
    var center = map.getCenter();
    $('.center').text("Center: " + center);

    var zoom = map.getZoom();
    $('.zoom').text("Zoom: " + zoom);

    // var pitch = map.getPitch();
    // $('.pitch').text("Pitch: " + pitch);

    // var bearing = map.getBearing();
    // $('.bearing').text("Bearing: " + bearing);
}