
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.99,40.74],
  zoom: 9.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Hi Web Mapping 2019 Class!');

var marker = new mapboxgl.Marker()
  .setLngLat([-73.969145,40.669116])
  .setPopup(popup)
  .addTo(map);

dataCitibikeLocation.forEach(function(citibikeData) {

  var thisstationcolor = 'steelblue';

  new mapboxgl.Marker({
    color: thisstationcolor,
  })
    .setLngLat([citibikeData.longitude, citibikeData.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`the station name is ${citibikeData.stationName} and has ${citibikeData.totalDocks} docks`))
    .addTo(map)
})
