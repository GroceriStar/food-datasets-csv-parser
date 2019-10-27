// import { join } from 'path';

import {
  mainWrapper
} from '@groceristar/food-dataset-csv-parser';

const parserUSFANutrition = async () => {
  console.log('--- parserUSFANutrition start ---');

  // const directory = '@raw/Nutrition';
  //
  // // joining path of directory
  // const directoryPath = join(__dirname, directory);

  // @TODO realize - can babel handle those kind of paths?
  const rawFilePath = `${__dirname}/Nutrient0.csv`;
  // const rawFilePath = `${__dirname}/Nutrient1.csv`;
  // const rawFilePath = `${__dirname}/Nutrient2.csv`;
  // const rawFilePath = `${__dirname}/Nutrient3.csv`;
  // const rawFilePath = `${__dirname}/Nutrient4.csv`;
  mainWrapper(rawFilePath)

};

export default parserUSFANutrition;
