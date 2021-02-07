// init mapbox on page
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFnYWRvbnV0cyIsImEiOiJja2tzbnVyMDMwbnIyMnhxbWVxdnRoc3Z1In0.IXWNtJpEBnXTXDyKVVRC5w';

// boolean for camera auto pilot
var cameraMoving = false;

// define map on page
var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
    style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
    center: [-83.75, 35.57],
    zoom: 12.6,
    pitch: 75,
    bearing: 120
});

// rotate camera around center point
function rotateCamera(timestamp) {
    if (cameraMoving) {
        map.rotateTo(180 + -1 * (timestamp / 100) % 360, { duration: 0 });
        requestAnimationFrame(rotateCamera);
    }
}

// stop camera movement when clicked
$('#stop').click(function() {
    cameraMoving = false;
});

// add map features when loaded
map.on('load', function () {
    // begin camera autopilot
    rotateCamera(0);

    // make map 3d
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

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
});


// trying to swap between topo and sat maps
// tutorial https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-compare/
// code from https://medium.com/@tipografico/using-mapbox-to-analyze-gpx-tracks-for-mountain-bike-638416d2d16c
// var topoMap = new mapboxgl.Map({
//     container: 'topoMap',
//     style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
//     center: [-83.75, 35.57], // starting position [lng, lat]
//     zoom: 12 // starting zoom
// });

// var satMap = new mapboxgl.Map({
//     container: 'satMap',
//     style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
//     center: [-83.75, 35.57], // starting position [lng, lat]
//     zoom: 12 // starting zoom
// });

// var container = '#comparison-container'

// var map2 = new mapboxgl.Compare(topoMap, satMap, container, {
// });

// topoMap.on('load', function () {
//     addLayer(topoMap, track)
// });

// satMap.on('load', function () {
//     addLayer(satMap, track)
// });
