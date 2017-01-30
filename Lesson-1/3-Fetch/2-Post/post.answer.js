//Use the api provided below to POST a new post to the api, and display the result

const jsonPlaceholderApiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Use fetch, look at resources to figure out POST. Requies options and headers
// https://developer.mozilla.org/en/docs/Web/API/Fetch_API
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch#post_request


const postToAdd = {
   "userId": 1,
   "title": "Test",
   "body": "This is a test post!"
 };


const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postToAdd),
}

fetch(jsonPlaceholderApiUrl, fetchOptions)
  .then( response => response.json())
  .then(console.log)
  .catch(console.log);
