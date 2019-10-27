/* eslint-disable */
const { readDir } = require("@groceristar/static-data-generator");
const path = require("path");

/**
 * @async
 * @param {string} dirPath directory path (must be absloute)
 * @returns {Promise<Array>} Promise<Array>
 */
async function findCsvFiles(dirPath) {
  // store founded csv files 
  const csvFiles = [];

  async function helper(dirPath) {
    const folders = await readDir(dirPath);
    let newDirPath = "";

    for (let name of folders) {
      newDirPath = dirPath.concat("/" + name);
      // recursion base case
      // if there is a csv file save it to csvFiles array and exit from the current call
      if (name.includes(".csv")) {
        csvFiles.push({ name, dirPath: newDirPath });
        return;
      }
      // loop through each folder
      await helper(newDirPath);
    }
  }
  await helper(dirPath);

  return csvFiles;
}

const rawPath = path.resolve("../raw");

findCsvFiles(rawPath).then(csvFiles => {
  console.log(csvFiles);
})
