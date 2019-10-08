const path = require('path');
// @TODO update require. when we export this method - we can connect it from index.js
const { parseCsv, csvToJson } = require(`${process.cwd()}/dist/index.cjs`);

async function Main() {
  const rawFilePath = path.join(__dirname, `Fish_Reftbl_RefDatasets.csv`);
  const data = await parseCsv(rawFilePath);
  await csvToJson(__dirname, data);
}
Main();
