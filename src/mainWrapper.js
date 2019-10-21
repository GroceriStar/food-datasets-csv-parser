import path from 'path';
import csvToJson from './csvToJson';
import parseCsv from './parseCsv';

const mainWrapper = async (filename, dirPath) => {
  const rawFilePath = path.join(dirPath, filename);
  const data = await parseCsv(rawFilePath);
  await csvToJson(dirPath, data);

  // test json spliting
  await csvToJson(dirPath, data, true);
};

export default mainWrapper;
