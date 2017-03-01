// Using the API key and the documentation found here, query for popular photos
// https://github.com/500px/api-documentation

var consumerKey = 'SIwRLq0AwiEydJeCT8NLk3chVNyEMgweH52bQVx5';
var feature = 'popular';

var baseUrl = 'https://api.500px.com/v1/'
var photoUrl = 'photos'
//apiUrl/photos?consumer_key=key&feature='popular'
fetch(baseUrl + photoUrl + '?consumer_key=' + consumerKey + '&feature=' + feature)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
