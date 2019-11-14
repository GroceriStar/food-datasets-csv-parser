// import _ from 'lodash';


// import { Nutrient, Derivation_Code, Product, Serving_Size } from '@files';

// import {
//   parserUSFADerivationCode,
//   parserUSFANutrition,
//   parserUSFAProduct,
//   parserUSFAServingSize,
// } from './files';
// // } from '@files';

// // import {
// //   parserUSFADerivationCode,
// //   parserUSFANutrition,
// //   parserUSFAProduct,
// //   parserUSFAServingSize,
// // } from './parsers/index';

// export {
//   parserUSFADerivationCode,
//   parserUSFANutrition,
//   parserUSFAProduct,
//   parserUSFAServingSize,
// };

const path = require('path');
const {
  findCsvFiles,
  parseCsv,
  csvToJson,
} = require('@groceristar/food-dataset-csv-parser');

async function Main() {
  const rawPath = path.resolve('../raw');
  const csvFiles = await findCsvFiles(rawPath);

  csvFiles.forEach(async (file) => {
    const { filename, dirPath } = file;
    const data = await parseCsv(`${dirPath}/${filename}`);
    await csvToJson(dirPath, data);
  });
}

Main();
