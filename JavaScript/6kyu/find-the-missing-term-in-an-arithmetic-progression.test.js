const findMissing = require('./find-the-missing-term-in-an-arithmetic-progression');

describe('#findMissing', () => {
  const tests = [
    { series: [1, 3, 4], expected: 2 },
    { series: [1, 3, 5, 9, 11], expected: 7 },
    { series: [-3, -2, -1, 1, 2, 3, 4,], expected: 0 },
    { series: [-2, -4, -5], expected: -3 },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { series, expected } = tests[key];
  
    it(`missing term in ${series} is ${expected}`, () => {
      Test.expect(findMissing(series), expected);
    });
  });
});
