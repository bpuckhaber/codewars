const getMiddle = require('./get-the-middle-character');

describe('#getMiddle', () => {
  const tests = [
    { str: 'test', expected: 'es' },
    { str: 'testing', expected: 't' },
    { str: 'middle', expected: 'dd' },
    { str: 'A', expected: 'A' },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { str, expected } = tests[key];
  
    it(`${str} should become ${expected}`, () => {
      Test.expect(getMiddle(str), expected);
    });
  });
});
