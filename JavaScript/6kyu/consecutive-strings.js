const longestConsec = (strArr, k) => {
  let longestStr = '';

  for (let i = 0; k > 0 && i <= strArr.length - k; i++) {
    const tempArray = strArr.slice(i, i + k);
    const tempStr = tempArray.join('');

    if (tempStr.length > longestStr.length) {
      longestStr = tempStr;
    }
  }

  return longestStr;
};

module.exports = longestConsec;
