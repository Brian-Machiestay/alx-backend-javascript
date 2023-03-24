const utils = require('./utils');
const calculateNumber = utils.calculateNumber;

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
