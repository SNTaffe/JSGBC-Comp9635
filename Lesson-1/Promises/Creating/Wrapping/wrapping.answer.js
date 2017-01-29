// Wrap the following callback based function so it uses promises

//Fake "database call" function that uses callbacks

const callDB = (onSuccess, onError) => {

  const succeedOrFail = Math.floor(Math.random() + 0.5);

  if ( succeedOrFail === 0) {
    return onError('Failure!');
  }

  return onSuccess('Success!')
}

//How you would use this function now:

//Success/error callbacks to pass to callDB
const handleSuccess = successText => {
  console.log("Succeeded with " + successText);
  return 1;
}

const handleFailure = failureText => {
  console.log("Failed with " + failureText);
  return 0;
}

//Make the call to the DB. Run this a few times and it should succeed/error
const statusCode = callDB(handleSuccess, handleFailure);

//How would you use new Promise() to wrap callDB so it returns a promise?

//Invokes callDB, but passes resolve/reject as callbacks
const callDBPromisified = () => {
  return new Promise( (resolve, reject) => {
    callDB(resolve, reject);
  })
}

//Now this returns a promise. We can use .then ( succeedCallback, errorCallback) in line
callDBPromisified().then( success => {
  console.log('Suceeded with ' + success)
}, error => {
  console.log('Failed with ' + error)
});
