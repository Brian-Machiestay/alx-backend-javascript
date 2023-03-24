const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;


describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 5', function () {
      chai.expect(calculateNumber('SUM', 3.6, 1.2)).to.equal(5);
    });
    it('should return 3', function () {
      chai.expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
    it('should return 4', function () {
      chai.expect(calculateNumber('SUM', 3.4, 1)).to.equal(4);
    });
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 4, 1.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return 3', function () {
      expect(calculateNumber('SUBTRACT', 3.6, 1.2)).to.equal(3);
    });
    it('should return -1', function () {
      expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    });
    it('should return 2', function () {
      expect(calculateNumber('SUBTRACT', 3.4, 1)).to.equal(2);
    });
    it('should return 2', function () {
      expect(calculateNumber('SUBTRACT', 4, 1.5)).to.equal(2);
    });
  });

  describe('DIVIDE', function () {
    it('should return 4.0', function () {
      expect(calculateNumber('DIVIDE', 3.6, 1.2)).to.equal(4.0);
    });
    it('should return 0.5', function () {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });
    it('should return 1.5', function () {
      expect(calculateNumber('DIVIDE', 3.4, 2)).to.equal(1.5);
    });
    it('should return 2', function () {
      expect(calculateNumber('DIVIDE', 4, 1.5)).to.equal(2);
    });
    it('should return Error', function () {
      expect(calculateNumber('DIVIDE', 4, 0.2)).to.equal('Error');
    })
  });
})
