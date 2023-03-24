const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');
const calculateNumber = utils.calculateNumber;

describe('sendPaymentRequestToApi', function () {
  it('should return true', function () {
    const spyapi = sinon.spy(sendPaymentRequestToApi, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spyapi.getCall(0).args()).to.deep.equal(['SUM', 100, 20]);
  })
})
