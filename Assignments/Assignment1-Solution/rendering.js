'use strict';

// User input, don't put this on the page until bike data is fetched
const userInputHtml = `<label for="userAddress"> Enter Address:</label>
  <input id="userAddress" size="80" type="text"></input>
  <button id="submitUserAddress" onClick="handleUserAddressSubmit()"> Find bikes </button>`;

// Helper to add above HTML
const setUserInputHtml = html => {
  document.getElementById('userInput').innerHTML = html;
};

// Clears markers by setting their map to nothing
const clearMarkers = markers => markers.forEach( marker => marker.setMap(null));

// Helpers
const googleMarkerFromLatLng = latlng => new google.maps.Marker({ position: latlng, map});
const infoWindowFromBikeData = bike => new google.maps.InfoWindow({ content: '<h1> Available: ' + bike.availableBikes + '</h1>'});

// Clears, gets top5 markers + userLocation as marker
const renderMarkers = () => {
  clearMarkers(markers);
  const newMarkers = top5Stations.map(latLngFromBikeData);
  markers = newMarkers.map(googleMarkerFromLatLng).concat(googleMarkerFromLatLng(userLocation));
  map.setCenter(userLocation);
};

// Initial Map render, use original user location as markers
const renderMap = () => {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: initialZoomLevel,
    center: userLocation
  });

  renderMarkers(userLocation, [userLocation]);
};

// Get infowindows for all markers + userLocation
const renderInfoWindows = () => {
  const userLocationWindow = new google.maps.InfoWindow({
    content: '<div> Lat: ' + userLocation.lat() + '</div>' + '<div> Lng: ' + userLocation.lng() + '</div>'
  });
  const infoWindows = top5Stations.map(infoWindowFromBikeData).concat(userLocationWindow);

  markers.forEach((marker, i) => {
    marker.addListener('click', () => {
      infoWindows[i].open(map, marker);
    });
  });
};


// Takes top 5, computes header and 1 row for each, places in #legend
const renderTable = () => {
  const rows = top5Stations.map(renderRow);
  const header = '<thead><tr>' +
  ['Address', 'Bikes Available', 'Walking Time'].map(renderColumn).join('') +
  '</tr></thead>';
  const body = rows.join('');
  const tableHtml =  '<table>' + header + body + '</table>';

  document.getElementById('legend').innerHTML = tableHtml;
};

// Helper specific to bikeData
const renderRow = bikeStation => {
  const { stAddress1, availableBikes, text } = bikeStation;
  return '<tr>' + [ stAddress1, availableBikes, text ].map(renderColumn).join('') + '</tr>';
};

// Helper
const renderColumn = content => '<td>' + content + '</td>';
