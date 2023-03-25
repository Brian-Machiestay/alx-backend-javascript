const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', function () {
  it('should be done when promise resolves', async function() {
    return getPaymentTokenFromAPI(true).then(function (data) {
      expect(data).to.deep.equal({data: 'Successful response from the API'});
    });
  });
})
