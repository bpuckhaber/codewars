Math.round = num => Math.floor(num + .5);

Math.ceil = (num) => {
  const floor = Math.floor(num);
  return floor === num ? floor : floor + 1;
};

Math.floor = num => ~~num;

module.exports = Math;
