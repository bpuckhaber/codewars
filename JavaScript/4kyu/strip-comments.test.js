const solution = require('./strip-comments');

describe('#stripComments', () => {
  it('multi char words', () => {
    const actual = solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']);

    Test.expect(actual, 'apples, plums\npears\noranges');
  });

  it('single char words', () => {
    const actual = solution('Q @b\nu\ne -e f g', ['@', '-']);

    Test.expect(actual, 'Q\nu\ne');
  });
});
