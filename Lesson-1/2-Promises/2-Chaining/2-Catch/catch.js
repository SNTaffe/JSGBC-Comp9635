// Write a catch function that will handle the error thrown inside the promise chain
// And not cause the code to crash
const createPromise = () => new Promise( resolve => resolve('done'));


const chainWithError = createPromise().then( result => {
  return createPromise();
}).then( result => {
  throw new Error('Failure in success callback');
  return createPromise();
})//.catch goes here
.then( () => {
  console.log('Program continues on')
})


//Note: without a catch block, the error above may be silently swallowed.
//This is a unfortunate part of promises. Run this code and it will just stop
//Without printing anything, but it may not display why. You should always use a catch
//block to avoid this.
//If you look in the chrome console, it will show up, but it won't in Codepen or Node
