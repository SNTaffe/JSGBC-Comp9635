// Use the sandbox API to get all the comments for photoId 'inclass'.
const apiKey = 'b2becbb33a01c2a1085888f14dda841901646b3d8543ac0a925275050cc82f81';

const baseURL = 'http://138.197.158.83:8081/';

const photoId = 'inclass';

fetch(`${baseURL}/api/photos/${photoId}/comments?apiKey=${apiKey}`).then(function(response) {
  if (response.ok) {
    return response.json();
  }
  console.log('There was an error.', response.status);
  // Should maybe also do response.json() here to display the error message
}).then(function(data) {
  console.log(data);
});
