const solution = (list) => {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    let rangeCount = 0;
    let k = i;

    while (list[k + 1] !== undefined && list[k + 1] === list[k] + 1) {
      rangeCount++;
      k++;
    }

    if (rangeCount > 1) {
      result.push(`${list[i]}-${list[k]}`);
      i = k;
    } else {
      result.push(list[i]);
    }
  }

  return result.join(',');
};

module.exports = solution;
