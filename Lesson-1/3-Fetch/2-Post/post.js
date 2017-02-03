//Use the api provided below to POST a new post to the api, and display the result

const jsonPlaceholderApiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Use fetch, look at resources to figure out POST. Requies options and headers
// https://developer.mozilla.org/en/docs/Web/API/Fetch_API
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch#post_request


// When you send this, the response should be the same object with a randomly assigned id for the new post
// This is so if you want to request the post again, or update the data, or show it somewhere else your application
// Now knows the ID
const postToAdd = {
   "userId": 1,
   "title": "Test",
   "body": "This is a test post!"
 };
