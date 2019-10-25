// const path = require('path');
const fs = require('fs');
// @TODO update require. when we export this method - we can connect it from index.js
const { mainWrapper, parseCsv, csvToJson } = require('../package/dist/index.cjs');

async function Main() {
  // const fileName = `Fish_NV_sum (per 100 g EP).csv`;
  const rawFilePath = `${__dirname}/Restaurants.csv`;
  const data = await parseCsv(rawFilePath);
  await csvToJson(__dirname, data);
}
Main();
