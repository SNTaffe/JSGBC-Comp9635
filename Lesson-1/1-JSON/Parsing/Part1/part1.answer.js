const GoTJSON = '{"books":[{"name":"A Game of Thrones","numberOfPages":694,"released":"1996-08-01T00:00:00"},{"name":"A Clash of Kings","numberOfPages":768,"released":"1999-02-02T00:00:00"},{"name":"A Storm of Swords","numberOfPages":992,"released":"2000-10-31T00:00:00"},{"name":"The Hedge Knight","numberOfPages":164,"released":"2005-03-09T00:00:00"},{"name":"A Feast for Crows","numberOfPages":784,"released":"2005-11-08T00:00:00"},{"name":"The Sworn Sword","numberOfPages":152,"released":"2008-06-18T00:00:00"},{"name":"The Mystery Knight","numberOfPages":416,"released":"2011-03-29T00:00:00"},{"name":"A Dance with Dragons","numberOfPages":1040,"released":"2011-07-12T00:00:00"},{"name":"The Princess and the Queen","numberOfPages":784,"released":"2013-12-03T00:00:00"},{"name":"The Rogue Prince","numberOfPages":832,"released":"2014-06-17T00:00:00"}]}';

const parsed = JSON.parse(GoTJSON);

console.log(parsed.books[0]);
