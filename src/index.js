// import { parseFoodComposition } from '../projects2.0/FoodComposition/parser';
import csvToJson from './csvToJson';

import parseCsv from './parseCsv';

// @TODO i don't like this name,
// because if we use it outside - it's very long
// and it boring and we at this time have
// some many copy-pasting it in projects.2.0
import parseDirectoryFiles from './fileSystem';

// i adding utils here only because it's my guess
import { readAllFiles, joinPath, getList } from './utils';
import mainWrapper from './mainWrapper';

export {
  csvToJson,
  // @TODO let's debate should we export
  // parseCsv or we just using it inside of csvToJson
  parseCsv,
  // parseFoodComposition,
  parseDirectoryFiles,
  mainWrapper,
  // can be removed later
  readAllFiles,
  joinPath,
  getList,
};
