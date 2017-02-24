'use strict';

// Initial fetch. Makes user input available after
const fetchBikeData = () => {
  setUserInputHtml('Fetching bike data...');
  fetch(bikeDataUrl)
      .then( response => response.json())
      .then( data => {
        bikeData = data;
        setUserInputHtml(userInputHtml);
      }).catch( alert);
};

// Make geocoder.geocode work as a promise, geocodes whatever is in input
const getUserLatLng = () => new Promise((resolve, reject) => {
  const address = document.getElementById('userAddress').value;
  geocoder.geocode({ address }, (result, status) => {
    if ( status === 'OK') {
      const location = result[0].geometry.location;
      userLocation = location;
      resolve(location);
    } else {
      reject(result);
    }
  });
});

// Makes getDistanceMatrix work as promise. Returns top five, includes duration value and text, and full station data.
const getTop5Durations = top25Locations => {
  const top25AsLatLng = top25Locations.map(latLngFromBikeData);

  return new Promise((resolve, reject) => {
    distanceMatrixService.getDistanceMatrix({
      origins: [ userLocation ],
      destinations: top25AsLatLng,
      travelMode: 'WALKING'
    }, (result, status) => {
      if ( status === 'OK') {
        const top5 = getDurationAndIndexFromDistanceMatrix(result).sort(sortByDuration).slice(0, 5);
        const top5WithLatLng = top5.map(durationObj => {
          const key = durationObj.key;
          return Object.assign({}, top25Locations[key], durationObj);
        });
        top5Stations = top5WithLatLng;
        resolve(top5WithLatLng);
      } else {
        reject(result);
      }
    });
  });
};
