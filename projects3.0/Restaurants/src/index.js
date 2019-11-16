const path = require('path');
const {
  findCsvFiles,
  parseCsv,
  csvToJson,
  mainWrapper2
} = require('@groceristar/food-dataset-csv-parser');


mainWrapper2('./raw');

// async function Main() {
//   const rawPath = path.resolve('./raw');
//   const csvFiles = await findCsvFiles(rawPath);
//
//   csvFiles.forEach(async (file) => {
//     const { filename, dirPath } = file;
//     const csvFilePath = `${dirPath}/${filename}`;
//     const data = await parseCsv(csvFilePath);
//     await csvToJson(dirPath, data);
//   });
// }
//
// Main();
