/* eslint-disable no-undef */
const getArrayUnion = require('../tasks/getArrayUnion');

describe('Array union', () => {
  test('should return uniq elements from both arrays', () => {
    const arr1 = [1, 2, 2];
    const arr2 = [2, 3, 3, 4];

    expect(getArrayUnion(arr1, arr2)).toEqual([1, 2, 3, 4]);
  });
  test('should return uniq elements from both arrays with dif types', () => {
    const arr1 = [1];
    const arr2 = [1, 5, 3];
    expect(getArrayUnion(arr1, arr2)).toEqual([1, 5, 3]);
  });
});
