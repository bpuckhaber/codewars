const descendingOrder = require('./descending-order');

describe('#descendingOrder', () => {
  const tests = [
    { num: 0, expected: 0 },
    { num: 1, expected: 1 },
    { num: 21445, expected: 54421 },
    { num: 145263, expected: 654321 },
    { num: 123456789, expected: 987654321 },
    { num: 1254859723, expected: 9875543221 },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { num, expected } = tests[key];
  
    it(`${num} should become ${expected}`, () => {
      Test.expect(descendingOrder(num), expected);
    });
  });
});
