const spinWords = require('./stop-gninnips-my-sdrow');

describe('#spinWords', () => {
  it('should reverse words with >= 5 chars', () => {
    Test.expect(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
  });

  it('should not reverse words with < 5 chars', () => {
    Test.expect(spinWords('This is a test'), 'This is a test');
  });
});
