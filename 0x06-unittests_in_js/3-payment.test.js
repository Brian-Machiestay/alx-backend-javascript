const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should return true', function () {
    const spyapi = sinon.spy(sendPaymentRequestToApi);
    sendPaymentRequestToApi(100, 20);
    expect(spyapi.returnValues[0]).to.equal(undefined);
  })
})
