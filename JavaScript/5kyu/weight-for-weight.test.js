const orderWeight = require('./weight-for-weight');

describe('#orderWeight', () => {
  const tests = [
    {
      weights: '',
      expected: '',
    },
    {
      weights: '3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697',
      expected: '3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697',
    },
    {
      weights: '71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81',
      expected: '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703',
    },
    {
      weights: '56 65 74 100 99 68 86 180 90',
      expected: '100 180 90 56 65 74 68 86 99',
    },
    {
      weights: '103 123 4444 99 2000',
      expected: '2000 103 123 4444 99',
    },
    {
      weights: '2000 10003 1234000 44444444 9999 11 11 22 123',
      expected: '11 11 2000 10003 22 123 1234000 44444444 9999',
    },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { weights, expected } = tests[key];
  
    it(`'${weights}' should become '${expected}'`, () => {
      Test.expect(orderWeight(weights), expected);
    });
  });
});
