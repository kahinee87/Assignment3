
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.99,40.74],
  zoom: 9.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

nycspots.forEach(function(studentData) {

  var thisStudentsColor = 'steelblue';
  if (studentData.type === 'park') thisStudentsColor = 'green';
  if (studentData.type === 'street') thisStudentsColor = 'grey';
  if (studentData.type === 'station') thisStudentsColor = 'yellow';


  new mapboxgl.Marker({
    color: thisStudentsColor,
  })
    .setLngLat([studentData.lng, studentData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`${studentData.name} says ${studentData.favouritenycspots} is one of my favourite local spots in NYC`))
    .addTo(map);
})
