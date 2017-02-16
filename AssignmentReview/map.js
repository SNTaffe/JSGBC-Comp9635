//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Map is a method that exists on JS arrays that takes a single argument, a function.
// It will apply this function to each element in the array.
// The function must return a value.
// At the end, the value returned by map is a NEW array with all the returned values.
// This doesn't modify the original array.
// It is cleaner than a for loop and safer because the original doesn't get modified, so we don't need to keep track
// Of what else might have modified it.

// Since the result of someArray.map is an array, we can also chain map functions!

// First with a for loop
const myArray = [1, 2, 3, 4, 5];

let doubledArray = myArray;

for(i = 0; i < myArray.length - 1; i++) {
  doubledArray[i] = myArray[i] * 2;
};

// Now with map.

// Here, the arrow function is called with each number. The arrow function then returns number * 2;

const doubledWithMap = myArray.map( number => number * 2);

// If we wanted to then put the number into an object, we'd have to do another for loop:

let tripledArray = doubledArray;

for( j = 0; j < tripledArray.length; j++) {
  tripledArray[j] = doubledArray[j] * 3;
}

// But with map we could cleanly chain them :)

const doubleThenTripleWithMap = myArray.map( number => number * 2).map( doubled => doubled * 3);
