// Write a catch function that will handle the error thrown inside the promise chain
// And not cause the code to crash
const createPromise = () => new Promise( resolve => resolve('done'));


const chainWithError = createPromise().then( result => {
  return createPromise();
}).then( result => {
  throw new Error('Failure in success callback');
  return createPromise();
})
.catch( e => {
  console.log("Error was thrown:", e);
}).then( () => {
  console.log('Program continues on')
})
