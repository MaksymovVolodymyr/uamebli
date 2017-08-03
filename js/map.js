function initMap() {
    var map = new google.maps.Map(document.querySelector('.map'), {
        center: {lat: 50.469196, lng: 30.6224425},
        zoom: 12,
        scrollwheel: false,
        styles: [
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b5cbe4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#83a5b0"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#bdcdd3"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e3eed3"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "road"
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {},
    {
        "featureType": "road",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    }
]
    });
    var icon = {
        path: 'M19.4,3.6h-.1a11,11,0,0,0-15.6,0H3.6a11,11,0,0,0-.7,14.8l8.6,10.3,8.6-10.3A11,11,0,0,0,19.4,3.6ZM11.5,16.5a5,5,0,1,1,5-5A5,5,0,0,1,11.5,16.5Z',
        fillColor: '#ce8f5a',
        fillOpacity: 1,
        strokeColor: '#ce8f5a'
    };
    var marker1 = new google.maps.Marker({
        position: {lat: 50.440485, lng: 30.628900},
        map: map,
        icon: icon
    });
    var marker2 = new google.maps.Marker({
        position: {lat: 50.497907, lng: 30.615985},
        map: map,
        icon: icon
    });
};
