const tribonacci = require('./tribonacci-sequence');

describe('#tribonacci', () => {
  const tests = [
    { signature: [1,1,1], n: 10, expected: [1,1,1,3,5,9,17,31,57,105] },
    { signature: [0,0,1], n: 10, expected: [0,0,1,1,2,4,7,13,24,44] },
    { signature: [0,1,1], n: 10, expected: [0,1,1,2,4,7,13,24,44,81] },
    { signature: [1,0,0], n: 10, expected: [1,0,0,1,1,2,4,7,13,24] },
    { signature: [0,0,0], n: 10, expected: [0,0,0,0,0,0,0,0,0,0] },
    { signature: [1,2,3], n: 10, expected: [1,2,3,6,11,20,37,68,125,230] },
    { signature: [3,2,1], n: 10, expected: [3,2,1,6,9,16,31,56,103,190] },
    { signature: [1,1,1], n: 1, expected: [1] },
    { signature: [300,200,100], n: 0, expected: [] },
    { signature: [0.5,0.5,0.5], n: 30, expected: [0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5] },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { signature, n, expected } = tests[key];
  
    it(`${signature} with ${n} elements`, () => {
      Test.expect(tribonacci(signature, n), expected);
    });
  });
});
