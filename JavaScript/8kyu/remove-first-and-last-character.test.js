const removeChar = require('./remove-first-and-last-character');

describe('#removeChar', () => {
  const tests = [
    { str: 'eloquent', expected: 'loquen' },
    { str: 'country', expected: 'ountr' },
    { str: 'person', expected: 'erso' },
    { str: 'place', expected: 'lac' },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { str, expected } = tests[key];
  
    it(`${str} should become ${expected}`, () => {
      Test.expect(removeChar(str), expected);
    });
  });
});
