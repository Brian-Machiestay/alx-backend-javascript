const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let spyConsole = ''
  beforeEach(function () {
    spyConsole = sinon.spy(console, 'log');
  })

  afterEach(function () {
    spyConsole.restore();
  })

  it('should log 120 to the console', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.getCall(0).args[0]).to.equal('The total is: 120');
    expect(spyConsole.calledOnce).to.be.true;
  })

  it('should log 20 to the console', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spyConsole.getCall(0).args[0]).to.equal('The total is: 20');
    expect(spyConsole.calledOnce).to.be.true;
  })
})
