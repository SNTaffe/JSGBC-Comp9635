// Using the createTimingPromise function provided, chain 3 promises together
// And assign the resolve values to first, second, and third.

//Makes a promise that resolves with value after time seconds
const createTimingPromise = (time, value) => {
  return new Promise( resolve => {
    setTimeout(resolve, time, value);
  })
}

let first, second, third;

//Create and chain promises here
