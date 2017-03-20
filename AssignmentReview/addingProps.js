// To take an array of objects, and add a property to them, we can use map.

const objs = [ { first: 1, second: 2}, { first: 2, second: 3}];

// Function that takes an obj and adds the first and second properties.
const addFirstAndSecond = obj => obj.first + obj.second;

const objsWithThirdProp = objs.map( obj => {
  let third = addFirstAndSecond(obj);
  obj.third = third;

  return obj;
});

console.log(objsWithThirdProp);
