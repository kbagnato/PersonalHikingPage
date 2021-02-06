$('document').ready(function() {
    initMapbox(); 
});

// 
function initMapbox() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFnYWRvbnV0cyIsImEiOiJja2tzbnVyMDMwbnIyMnhxbWVxdnRoc3Z1In0.IXWNtJpEBnXTXDyKVVRC5w';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

}