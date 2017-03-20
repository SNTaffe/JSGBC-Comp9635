'use strict';

// Sorting
const sortByDistance = (a, b) => a.distance - b.distance;
const sortByDuration = (a, b) => a.value - b.value;

// Helper function since we do this a lot
const latLngFromBikeData = bike => new google.maps.LatLng(bike.latitude, bike.longitude);


// Compute distance from userLocation for each bikeStation, sorts, filters stations that have available bike, returns top25
const getTop25Locations = () => {
  return bikeData.map( bikeLocation => {
    const bikeLatLng = latLngFromBikeData(bikeLocation);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(userLocation, bikeLatLng);

    return Object.assign({}, bikeLocation, { distance });
  }).sort(sortByDistance)
    .filter(bike => bike.availableBikes !== 0)
    .slice(0, 25);
};

// Takes distance matrix response and returns just duration object + index
const getDurationAndIndexFromDistanceMatrix = distanceMatrix => {
  const elements = distanceMatrix.rows[0].elements;
  return elements.map( (element, i) => {
    return Object.assign({}, element.duration, { key: i });
  });
};
