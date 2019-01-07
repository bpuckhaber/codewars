const longestConsec = require('./consecutive-strings');

describe('#longestConsec', () => {
  const tests = [
    { strArr: ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], k: 2, expected: 'abigailtheta' },
    { strArr: ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], k: 1, expected: 'oocccffuucccjjjkkkjyyyeehh' },
    { strArr: [], k: 3, expected: '' },
    { strArr: ['itvayloxrp','wkppqsztdkmvcuwvereiupccauycnjutlv','vweqilsfytihvrzlaodfixoyxvyuyvgpck'], k: 2, expected: 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck' },
    { strArr: ['wlwsasphmxx','owiaxujylentrklctozmymu','wpgozvxxiu'], k: 2, expected: 'wlwsasphmxxowiaxujylentrklctozmymu' },
    { strArr: ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], k: -2, expected: '' },
    { strArr: ['it','wkppv','ixoyx', '3452', 'zzzzzzzzzzzz'], k: 3, expected: 'ixoyx3452zzzzzzzzzzzz' },
    { strArr: ['it','wkppv','ixoyx', '3452', 'zzzzzzzzzzzz'], k: 15, expected: '' },
    { strArr: ['it','wkppv','ixoyx', '3452', 'zzzzzzzzzzzz'], k: 0, expected: '' },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { strArr, k, expected } = tests[key];
  
    it(`test ${key} should return ${expected}`, () => {
      Test.expect(longestConsec(strArr, k), expected);
    });
  });
});
