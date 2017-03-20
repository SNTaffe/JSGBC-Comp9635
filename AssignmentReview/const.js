// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

// Const just declares a variable, but will throw an error if you try and reasign it.
// It is also block scoped, which means it is only available inside whatever {} block it is.

const test = 'test';
test = 'test2'; // This will throw a warning in the console.


// We use let if we want to reassign. Let is like var, but block scoped.

let test2 = 'test';
test2 = 'test2'; // This is fine.
