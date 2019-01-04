const likes = require('./who-likes-it');

describe('#likes', () => {
  it('no names', () => {
    Test.expect(likes([]), 'no one likes this');
  });

  it('one name', () => {
    Test.expect(likes(['Peter']), 'Peter likes this');
  });

  it('two names', () => {
    Test.expect(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
  });

  it('three names', () => {
    Test.expect(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
  });

  it('more than three names', () => {
    Test.expect(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
