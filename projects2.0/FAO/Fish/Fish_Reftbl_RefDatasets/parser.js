const path = require('path');
// @TODO update require. when we export this method - we can connect it from index.js
const { csvToJson, parseCsv } = require('../../../../dist/index.cjs');

async function Main() {
  const rawFilePath = path.join(__dirname, `Fish_Reftbl_RefDatasets.csv`);
  const data = await parseCsv(rawFilePath);
  await csvToJson(__dirname, data);

  // test json spliting
  await csvToJson(__dirname, data, true);
}
Main();
