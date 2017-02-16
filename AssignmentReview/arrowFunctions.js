// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Arrow functions are just a short form of writing out new functions, especially anonymous ones.

// These two statements both declare functions

var myFunc = function(param1, param2) {
  console.log(param1, param2);
};

const arrowFunc = (param1, param2) => {
  console.log(param1, param2);
}

// Even better, if the function only takes one argument you can omit the () with arrow func

var singleArg = function(param1) {
  return param1;
}

const singleArrow = param1 => {
  return param1;
}

// Even better, if you just want to return a value after a simple calculation, you can even omit the {} and return statement!

var double = function(number) {
  return number * 2;
}

// Does the same as above, but is VERY terse and clean.
const double = number => number * 2;
