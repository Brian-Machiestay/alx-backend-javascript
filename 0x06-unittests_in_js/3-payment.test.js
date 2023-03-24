const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const calculateNumber = Utils();

describe('sendPaymentRequestToApi', function () {
  it('should return true', function () {
    const spyapi = sinon.spy(calculateNumber);
    sendPaymentRequestToApi(100, 20);
    expect(spyapi.calledOnce).to.be.false;
  })
})
