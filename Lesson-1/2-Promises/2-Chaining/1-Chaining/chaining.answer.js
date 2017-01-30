// Using the createTimingPromise function provided, chain 3 promises together
// And assign the resolve values to first, second, and third.

//Makes a promise that resolves with value after time seconds
const createTimingPromise = (time, value) => {
  return new Promise( resolve => {
    setTimeout(resolve, time, value);
  })
}

let first, second, third;

const chain = createTimingPromise(1000, 'firstResult').then( result => {
  console.log('First promise resolved with: ' + result);
  first = result;
  return createTimingPromise(2000, 'secondResult');
}).then( result => {
  console.log('Second promise resolved with: ' + result);
  second = result;
  return createTimingPromise(3000, 'thirdResult');
}).then( result => {
  console.log('Third promise resolved with: ' + result);
  third = result;
}).then( () => {
  console.log('Done!');
  console.log(first, second, third);
});
