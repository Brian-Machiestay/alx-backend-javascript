const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('test root endpoint', function () {
  it('returns the root info', function () {
    return request('http://localhost:7865', function (err, res, body) {
      if (err) console.log(err);
      expect(body).to.equal('Welcome to the payment system');
      expect(res.statusCode).to.equal(200);
    });
  })
});

describe('test cart endpoint', function () {
  it('correct matching cart endpoint returns 200', function () {
    return request('http://localhost:7865/cart/12', function(err, res, body) {
      if (err) console.log(err);
      expect(body).to.equal('Payment methods for cart 12');
      expect(res.statusCode).to.equal(200);
    })
  })

  it('non-matching endpoint for cart returns 404', function () {
    return request('http://localhost:7865/cart/hi', function(err, res, body) {
      if (err) console.log(err);
      expect(res.statusCode).to.equal(404);
    })
  })
});
