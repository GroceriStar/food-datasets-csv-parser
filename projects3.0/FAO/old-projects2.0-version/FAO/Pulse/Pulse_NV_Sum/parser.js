// @TODO update require. when we export this method - we can connect it from index.js
const { mainWrapper } = require('../../../package/dist/index.cjs');

mainWrapper('Pulse_NV_sum (per 100 g EP on FW).csv', __dirname);
