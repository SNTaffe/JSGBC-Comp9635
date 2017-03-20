//Pen here http://codepen.io/nicholasgwk/pen/JWGBoo?editors=0011
// Response MDN: https://developer.mozilla.org/en-US/docs/Web/API/Response
// Headers Object MDN: https://developer.mozilla.org/en-US/docs/Web/API/Headers

const jsonAPIUrl = 'https://jsonplaceholder.typicode.com/';
const usersURL = 'users';

fetch(`${jsonAPIUrl}${usersURL}`).then( function(response) {
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
