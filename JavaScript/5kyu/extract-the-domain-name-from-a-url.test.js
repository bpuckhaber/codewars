const domainName = require('./extract-the-domain-name-from-a-url');

describe('#domainName', () => {
  const tests = [
    { url: 'http://google.com', domain: 'google' },
    { url: 'http://google.co.jp', domain: 'google' },
    { url: 'www.xakep.ru', domain: 'xakep' },
    { url: 'https://youtube.com', domain: 'youtube' },
    { url: 'http://github.com/carbonfive/raygun', domain: 'github' },
    { url: 'http://www.zombie-bites.com', domain: 'zombie-bites' },
    { url: 'https://www.cnet.com', domain: 'cnet' },
  ];
  
  Object.keys(tests).forEach((key) => {
    const { url, domain } = tests[key];
  
    it(`${url} should return domain ${domain}`, () => {
      Test.expect(domainName(url), domain);
    });
  });
});
