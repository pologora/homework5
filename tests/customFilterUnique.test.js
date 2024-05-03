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

  test('should filter uniq', () => {
    const arr = [1, 2, 2, 3, 3, 4, 4, 5, 6];
    const cb = (item) => {
      if (item > 2) {
        return item;
      }
    };
    expect(customFilterUnique(arr, cb)).toEqual([5, 6]);
  });

  test('should filter uniq array with objects', () => {
    const arr = [
      { name: 'liza', age: 22 },
      { name: 'liza', age: 22 },
      { name: 'liza', age: 23 },
      { name: 'liza', age: 25 },
      { name: 'liza', age: 25 },
    ];

    const cb = (item) => {
      if (item.age > 22) {
        return item.age;
      }
    };

    expect(customFilterUnique(arr, cb)).toEqual([23]);
  });
});
