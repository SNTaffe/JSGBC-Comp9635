//Pen here http://codepen.io/nicholasgwk/pen/gmPjPx?editors=0012
// Response MDN: https://developer.mozilla.org/en-US/docs/Web/API/Response
// Headers Object MDN: https://developer.mozilla.org/en-US/docs/Web/API/Headers

const jsonAPIUrl = 'https://jsonplaceholder.typicode.com/';
const postsURL = 'posts';

const options = {
  method: 'POST',
}

fetch(`${jsonAPIUrl}${postsURL}`, options).then( function(response) {
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers.get('Content-Type'));

  if(response.ok) {
    return response.json();
  }
  //Could check and handle errors here and decide what to return.
}).then( function(data){
  console.log(data);
});
