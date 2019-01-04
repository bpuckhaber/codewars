const phone = (phoneBook, num) => {
  const entries = phoneBook.split('\n').filter(entry => entry.indexOf(num) >= 0);
  if (entries.length > 1) return `Error => Too many people: ${num}`;
  if (entries.length === 0) return `Error => Not found: ${num}`;
  
  const entry = entries[0];
  const name = /<(.*)>/.exec(entry)[1];
  const address = entry
    .replace(name, '')
    .replace(num, '')
    .replace(/[^\w\s-\.]*/g, '')
    .trim()
    .replace('  ', ' ')
    .replace('_', ' ')
    .trim();

  return `Phone => ${num}, Name => ${name}, Address => ${address}`;
};

module.exports = phone;