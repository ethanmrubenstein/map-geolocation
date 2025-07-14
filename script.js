const global = {
  lat: "",
  lon: "",
};

navigator.geolocation.getCurrentPosition(function (position) {
  global.lat = position.coords.latitude;
  global.lon = position.coords.longitude;

  var map = L.map("map").setView([global.lat, global.lon], 5);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  const marker = L.marker([global.lat, global.lon])
    .addTo(map)
    .bindPopup("Your current location");

  document.querySelector(".leaflet-control-attribution").remove();
});
