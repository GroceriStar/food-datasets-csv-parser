// import { join } from 'path';

import {
  mainWrapper
} from '@groceristar/food-dataset-csv-parser';

const parserUSFAProduct = async () => {
  console.log('--- parserUSFAProduct start ---');

  // // @TODO changes required.
  // // we can use module resolver for this
  // const directory = '@raw/Product';
  //
  // // joining path of directory
  // const directoryPath = join(__dirname, directory);

  // @TODO realize - can babel handle those kind of paths?
  const rawFilePath = `${__dirname}/Products0.csv`;
  mainWrapper(rawFilePath)

};

export default parserUSFAProduct;
