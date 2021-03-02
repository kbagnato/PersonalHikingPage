var map;

$('document').ready(function() {
    initMapbox();
});

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
}

function updateInfo() {
    var center = map.getCenter();
    $('.center').text("Center: " + center);

    var zoom = map.getZoom();
    $('.zoom').text("Zoom: " + zoom);
}