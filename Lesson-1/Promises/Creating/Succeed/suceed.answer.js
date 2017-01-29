//Create a promise that suceeds and resolves with the value "success!" after 5 seconds

//Create the promise with constructor. Function gets resolve, reject functions.
const successfulPromise = new Promise( (resolve, reject) => {

  //Simple function that just calls the resolve function with the message "success"
  const resolveWithSuccess = () => resolve("Success!");

  //Calls resolvewithSuccess after 5 seconds
  setTimeout(resolveWithSuccess, 5000);
});
