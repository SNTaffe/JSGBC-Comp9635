// If we pass a sorted array to a function that returns an object with keys in that order ( like DistanceMatrix)
// We can use sort, Object.keys(), map and indexes to associate them.

const originalArray = [ { val: 1}, { val: 2}]

const outputObj = {
  0: 12.1123,
  1: 2.344,
};

//We need to sort the values in output obj, but then also pull in the val from original array.
// Object.keys takes an object, and returns an array of the key names

//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
const outputObjAsArray = Object.keys(outputObj);

// Output obj 0 is associated to originalArray index 0, so...

const objsWithOutputAndOriginalVal = outputObjAsArray.map( keyName =>{
  let output = outputObj[keyName];
  output.val = originalArray[keyName].val;
  return output;
});
