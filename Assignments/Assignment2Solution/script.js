// Using the API key and the documentation found here, query for popular photos
// https://github.com/500px/api-documentation

var consumerKey = 'SIwRLq0AwiEydJeCT8NLk3chVNyEMgweH52bQVx5';

var baseUrl = 'https://api.500px.com/v1/'
var photoUrl = 'photos/search'

var photos = [];

const fetchPhotos = term => {
return fetch(baseUrl + photoUrl + '?consumer_key=' + consumerKey + '&term=' + term)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    photos = data.photos;
  });
};

fetchPhotos('Toronto').then(function() {
  console.log(photos);
})

const renderPhotos = () => {
  const photoList = document.getElementById('photos');
  const photoHTML = photos.map(function(photo) {
    return `<li> <img src="${photo.image_url}"/></li>`
  }).join('');

  photoList.innerHTML = photoHTML;
}


const searchHandler = function() {
  const searchTerm = document.getElementById('search').value;
  fetchPhotos(searchTerm).then(renderPhotos);
}
