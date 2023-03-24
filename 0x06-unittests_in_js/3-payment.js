const Utils = require('./utils')
const calculateNumber = Utils.calculateNumber;

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
  return result;
}

module.exports = sendPaymentRequestToApi;
