const solution = (str) => {
  const chars = str.split('');
  let result = [];

  for(let i = 0; i < chars.length; i += 2) {
    result.push(chars[i] + (chars[i + 1] || '_'));
  }

  return result;
};

module.exports = solution;
