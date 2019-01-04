const sumStrings = require('./sum-strings-as-numbers');

describe('#sumStrings', () => {
  const tests = [
    { a: '123', b: '456', expected: '579' },
    { a: '2256', b: '6586', expected: '8842' },
    { a: '5467', b: '4900', expected: '10367' },
    { a: '55', b: '45', expected: '100' },
    { a: '1111', b: '7559', expected: '8670' },
    { a: '5', b: '0', expected: '5' },
    { a: '712569312664357328695151392', b: '8100824045303269669937', expected: '712577413488402631964821329' },
    { a: '50095301248058391139327916261', b: '81055900096023504197206408605', expected: '131151201344081895336534324866' },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { a, b, expected } = tests[key];
  
    it(`'${a}' + '${b}' = '${expected}'`, () => {
      Test.expect(sumStrings(a, b), expected);
    });
  });
});
