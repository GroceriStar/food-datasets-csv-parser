// import { join } from 'path';
import {
  mainWrapper
} from '@groceristar/food-dataset-csv-parser';

const parserUSFADerivationCode = async () => {
  console.log('--- parserUSFADerivationCode start ---');

  // @TODO realize - can babel handle those kind of paths?
  const rawFilePath = `${__dirname}/Derivation_Code_Description.csv`;
  mainWrapper(rawFilePath)

};

export default parserUSFADerivationCode;
