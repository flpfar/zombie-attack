import formatZeros from '../src/game/helpers/output-formatter';

describe('Output formatter helper', () => {
  describe("FormatZeros gets a number and returns it as a string with 0's prefix", () => {
    test('must return 000012 if input is 12', () => {
      const formattedNumber = formatZeros(12);
      expect(formattedNumber).toBe('000012');
    });
    test('must return 001250 if input is 1250', () => {
      const formattedNumber = formatZeros(1250);
      expect(formattedNumber).toBe('001250');
    });
    test('must be 6 characters long', () => {
      const formattedNumber = formatZeros(14);
      expect(formattedNumber.length).toBe(6);
    });
    test('must return "999999" if number is greater than 999999', () => {
      const formattedNumber = formatZeros(1200000);
      expect(formattedNumber).toBe('999999');
    });

    test('must return "000000" if number is less than 0', () => {
      const formattedNumber = formatZeros(-1);
      expect(formattedNumber).toBe('000000');
    });

    test('must return "000000" if input is not a number', () => {
      const formattedNumber = formatZeros([250]);
      expect(formattedNumber).toBe('000000');
    });
  });
});
