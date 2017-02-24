// Write a function showUpper that takes one arg, and
// calls String.toUpperCase on it inside the template string expression.
// Console.log should be "<original> if you are yelling is <ORIGINAL>"
const showUpper = someString => {
  console.log(`${someString} if you are yelling is ${ someString.toUpperCase()}`);
}
