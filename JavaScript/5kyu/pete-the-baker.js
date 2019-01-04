const cakes = (recipe, available) => {
  let maxes = [];
  for (let ingredient in recipe) {
    if (!available[ingredient]) return 0;
    maxes.push(Math.floor(available[ingredient] / recipe[ingredient]));
  };
  return Math.min(...maxes);
};

module.exports = cakes;
