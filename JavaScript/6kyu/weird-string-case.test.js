const toWeirdCase = require('./weird-string-case');

describe('#toWeirdCase', () => {
  it('should return the correct value for a single word', () => {
    Test.expect(toWeirdCase('This'), 'ThIs');
    Test.expect(toWeirdCase('is'), 'Is');
  });

  it('should return the correct value for multiple words', () => {
    Test.expect(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  });
});
