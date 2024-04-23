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
    const cb = (item) => item > 2;
    expect(customFilterUnique(arr, cb)).toEqual([3, 4, 5, 6]);
  });

  test('should filter uniq array with objects', () => {
    const arr = [
      { name: 'liza', age: 22 },
      { name: 'liza', age: 22 },
      { name: 'liza', age: 23 },
      { name: 'liza', age: 25 },
      { name: 'liza', age: 25 },
    ];

    const cb = (item, set) => {
      if (item.age > 22) {
        if (!set.has(item.age)) {
          set.add(item.age);
          return true;
        }
      }
    };

    expect(customFilterUnique(arr, cb)).toEqual([
      { name: 'liza', age: 23 },
      { name: 'liza', age: 25 },
    ]);
  });
});
