// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
// Template strings work like regular strings except for two key parts:
// Expressions + newlines


// Template strings use backticks. Otherwise, these two statements are identical
const templateString = `this is a template string`;
const normalString = 'this is a normal string';

console.log(normalString, templateString);

// Template strings can use the expression syntax ${ someExpression } to insert variables directly in the string

// Print "We are in <Location>" with and without template strings

const ourLocation = 'Toronto';

const regular = 'We are in ' + ourLocation;
const withTempalte = `We are in ${ourLocation}`;

 console.log(regular, withTemplate);
// Any JS expression will work though!

const answer = 2 + 2;
const regularAnswer = "2 + 2 is: " + answer;
const templateAnswer = `2 + 2 is: ${ 2 + 2}`;

// console.log(regularAnswer, templateAnswer);
//Also, we can use newlines!

const oldNewline = "This is the first line\n" + "This is the second line";
const templateNewline = `This is the first line
                         this is the second line`;

console.log(oldNewline);
console.log(templateNewline);
