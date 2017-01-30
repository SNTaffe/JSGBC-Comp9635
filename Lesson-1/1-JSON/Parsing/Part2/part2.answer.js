//Parse this into a JSON array and display all the books in an HTML list.

const GoTJSON = '{"books":[{"name":"A Game of Thrones","numberOfPages":694,"released":"1996-08-01T00:00:00"},{"name":"A Clash of Kings","numberOfPages":768,"released":"1999-02-02T00:00:00"},{"name":"A Storm of Swords","numberOfPages":992,"released":"2000-10-31T00:00:00"},{"name":"The Hedge Knight","numberOfPages":164,"released":"2005-03-09T00:00:00"},{"name":"A Feast for Crows","numberOfPages":784,"released":"2005-11-08T00:00:00"},{"name":"The Sworn Sword","numberOfPages":152,"released":"2008-06-18T00:00:00"},{"name":"The Mystery Knight","numberOfPages":416,"released":"2011-03-29T00:00:00"},{"name":"A Dance with Dragons","numberOfPages":1040,"released":"2011-07-12T00:00:00"},{"name":"The Princess and the Queen","numberOfPages":784,"released":"2013-12-03T00:00:00"},{"name":"The Rogue Prince","numberOfPages":832,"released":"2014-06-17T00:00:00"}]}';

const parsedJSON = JSON.parse(GoTJSON);

//Create list
const list = document.createElement("ul");

//Create list items
const listItems = parsedJSON.books.map( item => {
  const listElement = document.createElement("li");
  const text = document.createTextNode(item.name + '\n' + item.numberOfPages + '\n' + item.released);
  listElement.appendChild(text);
  return listElement;
});

//Append list items to list.
listItems.forEach( listItem => list.appendChild(listItem));

//Add list to body
document.querySelector("#addListHere").appendChild(list);
