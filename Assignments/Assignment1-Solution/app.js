'use strict';
// Constants
const bikeDataUrl = 'http://138.197.139.54:8081/data/simple';
let geocoder;
let distanceMatrixService;

// Globals, everything we need access to in a lot of functions
let bikeData = [];
let userLocation = { lat: 43.6532, lng: -79.3832 }; // Originally just center at Toronto, ON
let map = {};
let markers = [];
let initialZoomLevel = 13;
let top5Stations = [];


// Initial data fetch and render of map
var initApp = () => {
  geocoder = new google.maps.Geocoder();
  distanceMatrixService = new google.maps.DistanceMatrixService();
  fetchBikeData();
  renderMap();
};

// Process that happens each time the user submits an address
const handleUserAddressSubmit = () => {
  getUserLatLng()
    .then( () => {
      const top25 = getTop25Locations();
      return getTop5Durations(top25);
    })
    .then( () => {
      renderMarkers();
      renderInfoWindows();
      renderTable();
    });
};
