const isValidIP = require('./ip-validation');

describe('#isValidIP', () => {
  const tests = [
    { ip: '1.2.3.4', expected: true },
    { ip: '127.0.0.1', expected: true },
    { ip: '123.45.67.89', expected: true },
    { ip: '1.2.3', expected: false },
    { ip: '1.2.3.4.5', expected: false },
    { ip: '123.456.78.90', expected: false },
    { ip: '123.045.067.089', expected: false },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { ip, expected } = tests[key];
  
    it(`${ip} should be ${expected ? 'valid': 'invalid'}`, () => {
      Test.expect(isValidIP(ip), expected);
    });
  });
});
