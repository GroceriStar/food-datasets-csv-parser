// @TODO update require. when we export this method - we can connect it from index.js
const { mainWrapper } = require('../../../package/dist/index.cjs');

mainWrapper('Fish_NV_sum (per 100 g EP).csv', __dirname);
