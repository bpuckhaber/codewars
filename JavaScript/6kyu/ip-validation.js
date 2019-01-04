const isValidIP = (str) => {
  const result = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/g.exec(str);
  if (!result || result.length !== 5) return false;

  const matches = result.splice(1, 4);
  let isValid = true;

  for(let i = 0; isValid && i < matches.length; i++) {
    const match = matches[i];
    const num = parseInt(match);
    if ((match.length !== 1 && match.indexOf('0') === 0) || (num < 0 || num > 255)) {
      isValid = false;
    }
  }

  return isValid;
};

module.exports = isValidIP;
