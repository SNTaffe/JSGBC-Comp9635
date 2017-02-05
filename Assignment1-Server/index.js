const koa = require('koa');
const Router = require('koa-router');
const fetch = require('node-fetch');
const cors = require('kcors');

const bikeShareURL = 'https://feeds.bikesharetoronto.com/stations/stations.json';

let app = new koa();
let router = new Router();
let response = {};

app.use(cors());

const updateData = () => {
  fetch(bikeShareURL)
    .then( response => response.json())
    .then(data => {
    response = data;
    }).catch( err => fs.appendFile('log.txt', err))
  };

// Update data every 6 hours
updateData();
setInterval(updateData, 1000 * 60 * 60 * 6);

router.get('/', function(ctx, next) {
  ctx.body = response;
})
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8081);
console.log('Running');
