const orderWeight = (str) => {
  if (!str) return str;
  return str.match(/\d+/g)
    .map(weight => {
      const sum = weight.split('').map(num => parseInt(num)).reduce((a, b) => a + b);
      return { weight, sum };
    })
    .sort((x, y) => (x.sum === y.sum && String(x.weight) > String(y.weight)) || x.sum > y.sum ? 1 : -1)
    .map(x => x.weight)
    .join(' ');
};

module.exports = orderWeight;
