const likes = (names) => {
  let displayText = '';

  switch (true) {
    case names.length === 1:
      displayText = `${names[0]} likes this`;
      break;
    case names.length === 2:
      displayText = `${names[0]} and ${names[1]} like this`;
      break;
    case names.length === 3:
      displayText = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    case names.length > 3:
      displayText = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
      break;
    default:
      displayText = 'no one likes this';
  }

  return displayText;
};

module.exports = likes;
