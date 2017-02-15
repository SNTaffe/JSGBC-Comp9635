//Do I have fetch?

console.log(fetch);

//Actually, do I even have a window?

console.log(window);

//So do I have node-fetch because it is in node_modules now?

console.log(nodeFetch)

//Nope, I have to require it first, which acts like a script tag but is synchronous!

const fetch = require('node-fetch');

console.log(fetch);

//Now I can fetch something just like I can in a a browser

const placeHolderURL = 'https://jsonplaceholder.typicode.com/users';

fetch(placeHolderURL).then( response => response.json()).then(console.log);
