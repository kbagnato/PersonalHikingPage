// init mapbox on page
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFnYWRvbnV0cyIsImEiOiJja2tzbnVyMDMwbnIyMnhxbWVxdnRoc3Z1In0.IXWNtJpEBnXTXDyKVVRC5w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
    center: [-83.75, 35.57], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

// add hiking track to map
map.on('load', function () {
    // add geojson trail
    var url = 'tracks/Smokies.json'
    map.addSource('route', { type: 'geojson', data: url });

    // customize trail line
    map.addLayer({
        'id': 'route',
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

    // add water sources
    map.marker

    // add campsites
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
