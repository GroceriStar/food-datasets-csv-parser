// import { join } from 'path';

import {
  mainWrapper
} from '@groceristar/food-dataset-csv-parser';

const parserUSFAServingSize = async () => {
  console.log('--- parserUSFAServingSize start ---');

  // // @TODO changes required
  // const directory = '@raw/Serving_Size';
  //
  // // joining path of directory
  // const directoryPath = join(__dirname, directory);

  // @TODO realize - can babel handle those kind of paths?
  const rawFilePath = `${__dirname}/Serving_Size.csv`;
  mainWrapper(rawFilePath)

};

export default parserUSFAServingSize;
