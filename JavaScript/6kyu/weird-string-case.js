const toWeirdCase = (words) => {
  return words.split(' ').map(word => {
    return word.split('').map((char, i) => {
      return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
  }).join(' ');
};

module.exports = toWeirdCase;
