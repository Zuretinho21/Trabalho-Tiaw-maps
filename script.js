var map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

L.Control.geocoder().addTo(map);

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(posição) {
    var lat = posição.coords.latitude;
    var lon = posição.coords.longitude;

    map.setView([lat, lon], 13);
    
    L.marker([lat, lon]).addTo(map)
        .bindPopup('Sua localização')
        .openPopup();
    });
} 