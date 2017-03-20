// Using the API key and the documentation found here, query for popular photos
// https://github.com/500px/api-documentation

const consumerKey = 'SIwRLq0AwiEydJeCT8NLk3chVNyEMgweH52bQVx5';
const feature = 'popular';

const baseUrl = 'https://api.500px.com/v1/'
const photoUrl = 'photos'
//apiUrl/photos?consumer_key=key&feature='popular'
fetch(`${baseUrl}${photoUrl}?consumer_key=${consumerKey}&feature=${feature}`)
  .then( response => response.json())
  .then(function(data) {
    console.log(data);
  }
