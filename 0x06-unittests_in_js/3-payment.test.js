const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should return true', function () {
    const spyapi = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20, Utils.calculateNumber);
    expect(spyapi.calledOnce).to.true;
  })
})
