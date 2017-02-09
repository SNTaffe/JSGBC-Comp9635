const koa = require('koa');
const Router = require('koa-router');
const fetch = require('node-fetch');
const cors = require('kcors');

const bikeShareURL = 'https://feeds.bikesharetoronto.com/stations/stations.json';

let app = new koa();
let router = new Router();
let fullData = {};
let simpleData = {};

app.use(cors());

//Filter out bare minimum props we need for assignment
const filterSimpleData = data => {
  return data.stationBeanList.map( bean => {
    const {
      stAddress1,
      latitude,
      longitude,
      status,
      availableBikes,
      testStation,
      is_renting,
    } = bean;

    return {
      stAddress1,
      latitude,
      longitude,
      status,
      availableBikes,
      testStation,
      is_renting,
    };
  });
};
const updateData = () => {
  fetch(bikeShareURL)
    .then( response => response.json())
    .then(data => {
    fullData = data;
    simpleData = filterSimpleData(data);
    }).catch( err => fs.appendFile('log.txt', err))
  };

// Update data every 6 hours
updateData();
setInterval(updateData, 1000 * 60 * 60 * 6);

router.get('/data/simple', function(ctx, next) {
  ctx.body = simpleData;
})

router.get('/data/full', function(ctx, next) {
  ctx.body = fullData;
})
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8081);
console.log('Running');
