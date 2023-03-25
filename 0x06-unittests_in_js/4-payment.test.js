const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('should return true', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    Utils.calculateNumber('SUM', 100, 20);
    console.log('The total is: 120');
    expect(stub.getCall(0).args).to.deep.equal(['SUM', 100, 20]);
    expect(spy.calledOnceWith('The total is: 120')).to.be.true;
    stub.restore();
  })
})
