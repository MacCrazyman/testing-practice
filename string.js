const stringLength = (string) => {
  let stringLength = string.length;
  return (stringLength >= 1 && stringLength <=10)? stringLength : 'error';
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

module.exports = {stringLength:stringLength, reverseString:reverseString};