//Create a promise that fails and rejects with the value "Error!" after 5 seconds

//Create the promise with constructor. Function gets resolve, reject functions.
const rejectedPromise = new Promise( (resolve, reject) => {

  //Simple function that just calls the reject function with the message "Error!"
  const rejectWithError = () => reject("Error!");

  //Calls resolveWithError after 5 seconds
  setTimeout(rejectWithError, 5000);
});
