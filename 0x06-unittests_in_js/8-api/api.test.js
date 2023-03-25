const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('query the root of the server', function () {
  it('returns the root info', function () {
    return request('http://localhost:7865', function (err, res, body) {
      if (err) console.log(err);
      expect(body).to.equal('Welcome to the payment system');
      expect(res.statusCode).to.equal(200);
    });
  });
})
