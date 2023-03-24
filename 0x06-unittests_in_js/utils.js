const utils = () => {
  const calculateNumber = (type, a, b) => {
    const m = Math.round(a);
    const n = Math.round(b);

    if (type === 'SUM') return m + n;
    if (type === 'SUBTRACT') return m - n;
    if (type === 'DIVIDE') {
    if (n === 0) return 'Error';
      return m / n;
    }
  }
}

module.exports = utils;
