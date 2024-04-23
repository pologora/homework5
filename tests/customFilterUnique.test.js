/* eslint-disable no-undef */
const { customFilterUnique } = require('../tasks/customFilterUnique.js');

describe('Custom uniq', () => {
  test('Should return an array', () => {
    const result = customFilterUnique([1], () => {});
    expect(Array.isArray(result)).toBeTruthy();
  });
  test('should throw if first argument is not an array', () => {
    expect(() => customFilterUnique(1, () => {})).toThrow();
  });
  test('should throw if second argument is not a function', () => {
    expect(() => customFilterUnique([1], '() => {}')).toThrow();
  });
});
