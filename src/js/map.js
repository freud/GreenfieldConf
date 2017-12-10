if ($("#location-map").length > 0)
{
    var GoogleMapsLoader = require('google-maps'); // only for common js environments

    GoogleMapsLoader.KEY = 'AIzaSyDHg7dPxVL752oaPnX_zKowUzYNeRcMg7I';

    GoogleMapsLoader.load(function(google) {
        var centerMap = {lat: 51.939639, lng: 15.5188455};
        var confLocation = {lat: 51.9400937, lng: 15.5267821};

        var map = new google.maps.Map(document.getElementById('location-map'), {
            zoom: 16,
            center: centerMap
        });

        new google.maps.Marker({
            position: confLocation,
            map: map,
            title: 'Lokalizacja konferencji'
        });
    });
}