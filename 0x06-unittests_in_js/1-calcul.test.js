const calculateNumber = require('./1-calcul');
const assert = require('assert');


describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 5', function () {
      assert.equal(calculateNumber('SUM', 3.6, 1.2), 5);
    });
    it('should return 3', function () {
      assert.equal(calculateNumber('SUM', 1, 2), 3);
    });
    it('should return 4', function () {
      assert.equal(calculateNumber('SUM', 3.4, 1), 4);
    });
    it('should return 6', function () {
      assert.equal(calculateNumber('SUM', 4, 1.5), 6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return 3', function () {
      assert.equal(calculateNumber('SUBTRACT', 3.6, 1.2), 3);
    });
    it('should return -1', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
    });
    it('should return 2', function () {
      assert.equal(calculateNumber('SUBTRACT', 3.4, 1), 2);
    });
    it('should return 2', function () {
      assert.equal(calculateNumber('SUBTRACT', 4, 1.5), 2);
    });
  });

  describe('DIVIDE', function () {
    it('should return 4.0', function () {
      assert.equal(calculateNumber('DIVIDE', 3.6, 1.2), 4.0);
    });
    it('should return 0.5', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
    });
    it('should return 1.5', function () {
      assert.equal(calculateNumber('DIVIDE', 3.4, 2), 1.5);
    });
    it('should return 2', function () {
      assert.equal(calculateNumber('DIVIDE', 4, 1.5), 2);
    });
    it('should return Error', function () {
      assert.equal(calculateNumber('DIVIDE', 4, 0.2), 'Error');
    })
  });
})
