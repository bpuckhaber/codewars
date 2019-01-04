const sumStrings = (a, b) => {
  const aArr = a.split('');
  const bArr = b.split('');

  let result = '';
  let sum = 0;

  while (aArr.length || bArr.length || sum) {
    sum += ~~aArr.pop() + ~~bArr.pop();
    result = sum % 10 + result;
    sum = sum > 9;
  }

  return result.replace(/^0+/, '');
};

module.exports = sumStrings;
