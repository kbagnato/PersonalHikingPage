mapboxgl.accessToken = 'pk.eyJ1IjoiYmFnYWRvbnV0cyIsImEiOiJja2tzbnVyMDMwbnIyMnhxbWVxdnRoc3Z1In0.IXWNtJpEBnXTXDyKVVRC5w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
    center: [-83.75, 35.57], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

map.on('load'), function () {
    var url = 'public/tracks/Smokies (1).json'
    map.addSource('route', { type: 'geojson', data: url });

    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    });
};

// }


// trying to swap between topo and sat maps
// code from https://medium.com/@tipografico/using-mapbox-to-analyze-gpx-tracks-for-mountain-bike-638416d2d16c
// var topoMap = new mapboxgl.Map({
//     container: 'topo',
//     style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
//     center: [-83.75, 35.57], // starting position [lng, lat]
//     zoom: 12 // starting zoom
// });

// var satMap = new mapboxgl.Map({
//     container: 'sat',
//     style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
//     center: [-83.75, 35.57], // starting position [lng, lat]
//     zoom: 12 // starting zoom
// });

// var map = new mapboxgl.Compare(topoMap, satMap, {
//     // is this necessary?
//     mousemove: true
// });

// topoMap.on('load', function () {
//     addLayer(topoMap, track)
// });

// satMap.on('load', function () {
//     addLayer(satMap, track)
// });
