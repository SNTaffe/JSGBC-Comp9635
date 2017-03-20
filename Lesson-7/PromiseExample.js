// Shows that the .then callback always returns a promise


const createPromise = function(resolveVal) {
  return new Promise(function(resolve, reject){
    resolve(resolveVal);
  });
};

createPromise('Test 1').then( data => {
  console.log(data);
});


// Something is undefined because our original callback did not return anything.
// createPromise('Test 2').then( data => {
//   console.log(data);
// }).then( something => {
//   console.log(something);
// });

// Here the second then callback will have the value returned from the first as its value!

// createPromise('Test 3').then( data => {
//   console.log(data);
//   return 'Test 3 Step 2';
// }).then( something => {
//   console.log(something)
// });

//So, we can also create and return promises, and the next callback will get the value
// That THAT promise resolves with.

// createPromise('Test 4')
//   .then(data => {
//   console.log(data);
//   return createPromise('Test 4 second promise');
// }).then( data => {
//   console.log(data);
// });


// This lets us chain async calls, like REST API calls, while only going one layer deep!

// Example code only, will not run.


// fetch(firstEndpoint)
// .then( response => response.json())
// .then( data => {
//   //Do something with the data, like get an id.
//   const id = data[0].id;
//   return fetch(`${secondEndpoint}&id=${id}`);
// })
// .then( response => response.json())
// .then( data => {
//   console.log('Data from second call!');
//   console.log(data);
// });
