function Utils() {
  const calculateNumber = function (type, a, b) {
    const m = Math.round(a);
    const n = Math.round(b);

    if (type === 'SUM') return m + n;
    if (type === 'SUBTRACT') return m - n;
    if (type === 'DIVIDE') {
    if (n === 0) return 'Error';
      return m / n;
    }
  }
  return calculateNumber;
}

module.exports = Utils;
