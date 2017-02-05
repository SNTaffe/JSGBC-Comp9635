const koa = require('koa');
const cors = require('koa-cors');
const router = require('koa-simple-router');
const fetch = require('node-fetch');
const fs = require('fs');

const bikeShareURL = 'https://feeds.bikesharetoronto.com/stations/stations.json';


fetch(bikeShareURL).then( response => response.json()).then(console.log);
