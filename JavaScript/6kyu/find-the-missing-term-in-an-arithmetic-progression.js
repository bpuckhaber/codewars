const findMissing = (list) => {
  // Sort ascending
  const sortedList = list.sort((a, b) => a - b);

  // Find between each term
  const diffs = [];
  for (let i = 0; i < list.length - 1; i++) {
    diffs.push(list[i + 1] - list[i]);
  }

  // Constant will always be min of diffs
  const constant = Math.min(...diffs);

  // Find missing term using constant
  let missing;
  for (let i = 0; i < list.length - 1; i++) {
    const tmp = list[i] + constant;
    if (tmp !== list[i + 1]) {
      missing = tmp;
      break;
    }
  }

  return missing;
};

module.exports = findMissing;
