//Repeat the exercise from JSON parsing and print the Game Of Thrones books, but this time
//Dynamically fetch the data from the provided endpoint and filter out the title, numberOfPages, and released

const apiUrl = 'http://anapioficeandfire.com/api/books';


//Printing function
const addListToDOM = books => {
//Create list
const list = document.createElement("ul");

//Create list items
const listItems = books.map( item => {
  const listElement = document.createElement("li");
  const text = document.createTextNode(item.name + '\n' + item.numberOfPages + '\n' + item.released);
  listElement.appendChild(text);
  return listElement;
});

//Append list items to list.
listItems.forEach( listItem => list.appendChild(listItem));

//Add list to body
document.querySelector("#addListHere").appendChild(list);
};


//Use fetch

const books = fetch(apiUrl)
  .then( response => response.json()) //Convert response to JSON
  .then( jsonData => {
    console.log(jsonData)
  const justImportantProps = jsonData.map( book => {

    /* This is object destructuring, and new JS Feature. It is a shorthand way
    of doing this:
    const name = book.name;
    const numberOfPages = book.numberOfPages;
    const released = book.released;

    See video here: https://www.youtube.com/watch?v=PB_d3uBkQPs
    */

    const { name, numberOfPages, released } = book;

    return {
      name,
      numberOfPages,
      released,
      };
    });

    addListToDOM(justImportantProps);
  });
