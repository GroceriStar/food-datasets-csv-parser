import path from 'path';
// import getHeaders from './getHeaders';
import csvToJson from './csvToJson';
import parseCsv from './parseCsv';

const mainWrapper = async (filename, dirPath) => {
  // const headers = await getHeaders(filename);

  // console.log(headers);
  // I might have to include lines 5-14 insinde of an async function and await it.
  // This will become clearer once parseDrectoryFiles is functional.

  // @TODO this line is a good idea. For all of our csv parsers
  // projects we have a separated folder with files + parser inside.
  // we can make a root directory as default inside of `parserDirectoryFiles`
  // and change it if passed another variable
  // const directory = './';

  // const directoryPath = path.join(__dirname, directory + filename);

  // test version
  // const directoryPath = path.join(__dirname, filename);

  // console.log(filename);

  // console.log(directoryPath);
  // console.log('---');
  // console.log(headers);
  // parseDirectoryFiles(directoryPath, headers);
  // parseDirectoryFiles(filename, headers);

  const rawFilePath = path.join(dirPath, filename);
  const data = await parseCsv(rawFilePath);
  await csvToJson(dirPath, data);

  // test json spliting
  await csvToJson(dirPath, data, true);
};

export default mainWrapper;
