const cakes = require('./pete-the-baker');

describe('#cakes', () => {
  it('should return 2', () => {
    const recipe = { flour: 500, sugar: 200, eggs: 1 };
    const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

    Test.expect(cakes(recipe, available), 2);
  });

  it('should return 0', () => {
    const recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
    const available = { sugar: 500, flour: 2000, milk: 2000 };

    Test.expect(cakes(recipe, available), 0);
  });
});
