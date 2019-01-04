const getMiddle = (s) => {
  const chars = s.split('');
  const length = chars.length;
  const middleIndex = Math.floor(length / 2);
  let middle = chars[middleIndex];

  if (length % 2 === 0) {
    middle = chars[middleIndex - 1] + middle;
  }

  return middle;
};

module.exports = getMiddle;
