const formatZeros = (number) => {
  if (number < 0 || typeof number !== 'number') return '000000';
  if (number >= 999999) return '999999';
  let stringNumber = String(number);
  while (stringNumber.length < (6 || 2)) {
    stringNumber = `0${stringNumber}`;
  }
  return stringNumber;
};

export default formatZeros;
