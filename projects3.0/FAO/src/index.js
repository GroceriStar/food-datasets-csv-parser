/* eslint-disable no-unused-vars */

// import {
//   csvToJson,
//   parseDirectoryFiles,
// } from '@groceristar/food-dataset-csv-parser';
const path = require("path");
const { findCsvFiles, parseCsv, csvToJson } = require("../../../package/dist/index.cjs");

async function Main() {
  const rawPath = path.resolve("../raw");
  const csvFiles = await findCsvFiles(rawPath);

  csvFiles.forEach(async file => {
    const { filename, dirPath } = file;
    const data = await parseCsv(`${dirPath}/${filename}`);
    await csvToJson(dirPath, data);
  });
}

Main();
