const Math = require('./math-issues');

describe('Math', () => {
  describe('#round', () => {
    it('.4 should round down to 0', () => {
      Test.expect(Math.round(.4), 0);
    });

    it('.5 should round up to 1', () => {
      Test.expect(Math.round(.5), 1);
    });

    it('1 should return 1', () => {
      Test.expect(Math.round(1), 1);
    });
  });

  describe('#ceil', () => {
    it('.4 should round up to 1', () => {
      Test.expect(Math.ceil(.4), 1);
    });

    it('.5 should round up to 1', () => {
      Test.expect(Math.ceil(.5), 1);
    });

    it('1 should return 1', () => {
      Test.expect(Math.ceil(1), 1);
    });
  });

  describe('#floor', () => {
    it('.4 should round down to 0', () => {
      Test.expect(Math.floor(.4), 0);
    });

    it('.5 should round down to 0', () => {
      Test.expect(Math.floor(.5), 0);
    });

    it('1 should return 1', () => {
      Test.expect(Math.floor(1), 1);
    });
  });
});
