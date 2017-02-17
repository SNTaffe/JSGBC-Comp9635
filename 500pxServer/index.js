const koa = require('koa');
const fetch = require('node-fetch');
const cors = require('kcors');
const serve = require('koa-static');
const mount = require('koa-mount');

const router = require('./routes');


const app = new koa();
app.use(cors());
app.use(mount(serve('.')), '/')

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8081);
console.log('Running on port 8081');
