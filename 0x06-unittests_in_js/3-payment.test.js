const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment').sendPaymentRequestToApi;
const Utils = require('./3-payment').Utils;

describe('sendPaymentRequestToApi', function () {
  it('should return true', function () {
    const spyapi = sinon.spy(sendPaymentRequestToApi);
    sendPaymentRequestToApi(100, 20);
    expect(spyapi.returnValues[0]).to.equal(undefined);
  })
})
