
var GoogleMapsLoader = require('google-maps'); // only for common js environments

GoogleMapsLoader.KEY = 'AIzaSyDHg7dPxVL752oaPnX_zKowUzYNeRcMg7I';

GoogleMapsLoader.load(function(google) {
    var myLatLng = {lat: 51.9400937, lng: 15.5267821};

    var map = new google.maps.Map(document.getElementById('location-map'), {
        zoom: 16,
        center: myLatLng
    });

    new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Lokalizacja konferencji'
    });
});
