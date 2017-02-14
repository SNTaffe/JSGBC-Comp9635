const koa = require('koa');
const serve = require('koa-serve');

const app = koa();
app.use(serve('1-FacebookSDK/index.html'));

app.listen(3000);
console.log('listening at http://localhost:3000');
