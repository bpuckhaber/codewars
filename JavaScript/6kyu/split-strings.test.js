const solution = require('./split-strings');

describe('#splitStrings', () => {
  it('odd', () => {
    Test.expect(solution('abc'), ['ab', 'c_']);
  });

  it('even', () => {
    Test.expect(solution('abcdef'), ['ab', 'cd', 'ef']);
  });
});
