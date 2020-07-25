const formatZeros = (number) => {
  let stringNumber = String(number);
  while (stringNumber.length < (6 || 2)) {
    stringNumber = `0${stringNumber}`;
  }
  return stringNumber;
};

export default formatZeros;
