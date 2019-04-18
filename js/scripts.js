
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.99,40.74],
  zoom: 9.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var marker = new mapboxgl.Marker()
  .setLngLat([-73.969145,40.669116])
  .setPopup(popup)
  .addTo(map);

NYCSpots.forEach(function(studentData) {

  var thisStudentsColor = 'steelblue';
  if (studentData.NYUProgram === 'Wagner') thisStudentsColor = 'yellow';


  new mapboxgl.Marker({
    color: thisStudentsColor,
  })
    .setLngLat([studentData.Lng, studentData.Lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`${studentData.Name} says this is one of my top 5 favourite local spots in NYC ${studentData.FavouriteNYCSpots}`))
    .addTo(map);
})
