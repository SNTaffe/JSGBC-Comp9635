// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// We can sort numbers without a custom sort function.

const unsorted = [2, 4, 8, 7, 5];
const sorted = unsorted.sort();


// If we need to sort an array with objects, we have to tell sort how.
// We give it a function that returns as follow(from docs above)

/* function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/

const unsortedObjs = [ { val: 2}, { val: 5 }, { val: 3}, { val: 0}];

const sortedObjs = unsortedObjs.sort( (a,b) => {
  return a.val - b.val;
});
