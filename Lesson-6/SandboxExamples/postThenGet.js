// Post a comment to photoID 'inclass', then fetch all comments for it.
// Using your API key, post a comment to the Sandbox for the photo ID 'inclass'

// Your request will need these things or you will get a 400
// Query Param = apiKey=<a valid API key>
// Body = Object with text property
// Method = POST
// Header = Content-Type: 'application/json'

const commentObj = {
  text: 'This is the last comment we posted!',
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(commentObj),
}

const apiKey = 'b2becbb33a01c2a1085888f14dda841901646b3d8543ac0a925275050cc82f81';

const baseURL = 'http://138.197.158.83:8081/';

const photoId = 'inclass';


// Render Initial Comment List
// Text box with a click handler

fetch(`${baseURL}/api/photos/${photoId}/comments?apiKey=${apiKey}`, options)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    console.log('There was an error', response.status);
}).then(function(data) {
  //Post is done, lets get the comments :).
  return fetch(`${baseURL}/api/photos/${photoId}/comments?apiKey=${apiKey}`)
}).then(function(response) {
    return response.json();
}).then(function(data) => {
    //Render HTML
});
