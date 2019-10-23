// @TODO update require. when we export this method - we can connect it from index.js
const { mainWrapper } = require('../../../../dist/index.cjs');

mainWrapper('Vegetables.csv', __dirname);
