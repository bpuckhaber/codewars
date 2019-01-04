const multiply = require('./multiply');

describe('#multiply', () => {
  const tests = [
    { a: 1, b: 1, expected: 1 },
    { a: 0, b: 1, expected: 0 },
    { a: -1, b: 1, expected: -1 },
    { a: 12, b: 12, expected: 144 },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { a, b, expected } = tests[key];
  
    it(`${a} * ${b} = ${expected}`, () => {
      Test.expect(multiply(a, b), expected);
    });
  });
});
