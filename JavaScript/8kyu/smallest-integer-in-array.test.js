const SmallestIntegerFinder = require('./smallest-integer-in-array');

describe('#findSmallestInt', () => {
  const tests = [
    { args: [78, 56, 232, 12, 8], expected: 8 },
    { args: [78, 56, 232, 12, 18], expected: 12 },
    { args: [78, 56, 232, 412, 228], expected: 56 },
    { args: [78, 56, 232, 12, 0], expected: 0 },
    { args: [1, 56, 232, 12, 8], expected: 1 },
    { args: [34, 15, 88, 2], expected: 2 },
    { args: [34, -345, -1, 100], expected: -345 },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { args, expected } = tests[key];
  
    it(`${args} should return ${expected}`, () => {
      const finder = new SmallestIntegerFinder();
      Test.expect(finder.findSmallestInt(args), expected);
    });
  });
});
