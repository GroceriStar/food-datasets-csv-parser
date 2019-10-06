// const path = require('path');
const fs = require('fs');
// @TODO update require. when we export this method - we can connect it from index.js
const {
  mainWrapper,
  parseCsv,
  writeJsonFile
} = require('../../../../dist/index.cjs');

async function Main() {
  // const fileName = `Fish_NV_sum (per 100 g EP).csv`;
  const rawFilePath = `${__dirname}/Restaurants.csv`;
  const data = await parseCsv(rawFilePath);
  writeJsonFile();
}
Main();
