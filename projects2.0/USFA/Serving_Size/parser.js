// const path = require('path');
// @TODO update require. when we export this method - we can connect it from index.js
const {
  mainWrapper
} = require('../../package/dist/index.cjs.js');

async function Main() {
  const rawFilePath = `${__dirname}/Serving_Size.csv`;
  mainWrapper(rawFilePath)

}
Main();
