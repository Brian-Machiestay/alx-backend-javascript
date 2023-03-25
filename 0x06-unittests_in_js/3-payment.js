const Utils = require('./utils')
const calculateNumber = Utils.calculateNumber;

const sendPaymentRequestToApi = (totalAmount, totalShipping, fn = null) => {
  let result = '';
  if (fn !== null) result = fn('SUM', totalAmount, totalShipping);
  else result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
  return result;
}

module.exports = sendPaymentRequestToApi;
