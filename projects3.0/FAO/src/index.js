/* eslint-disable no-unused-vars */

// import {
//   csvToJson,
//   parseDirectoryFiles,
// } from '@groceristar/food-dataset-csv-parser';
const path = require("path");
const findCsvFiles = require("./files");

const rawPath = path.resolve("../raw");

findCsvFiles(rawPath).then(csvFiles => {
  console.log(csvFiles);
})
