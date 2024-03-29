const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe('calculateNumber', function () {
  it('should return 7', function () {
    assert.equal(calculateNumber(4, 3), 7);
  });

  it('should return 5', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 4', function () {
    assert.equal(calculateNumber(1.2, 3), 4);
  });
  it('should return 6', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should return -3', function () {
    assert.equal(calculateNumber(-1.5, -1), -2);
  })
  it('should return 4', function () {
    assert.equal(calculateNumber(1, 3.4), 4);
  })
});
