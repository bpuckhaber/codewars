const solution = (input, markers) => {
  return input.replace(new RegExp(`\\s?[${markers.join('')}].*(\\n)?`, 'gi'), '$1');
};

module.exports = solution;