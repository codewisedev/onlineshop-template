var myCenter = new google.maps.LatLng(35.8080372018028, 50.986346170651494);
function initialize() {
    var mapProp = {
        center: myCenter,
        scrollwheel: false,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        map: map,
    });

    var styles = [
        {
            stylers: [
                {
                    hue: '#ff6348',
                },
            ],
        },
    ];

    map.setOptions({styles: styles});
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
