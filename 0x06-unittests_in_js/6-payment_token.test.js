const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should be done when promise resolves', function(done) {
    getPaymentTokenFromAPI(true).then(done())
  });
})
