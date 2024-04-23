/* eslint-disable no-undef */
const getArrayUnion = require('../tasks/getArrayUnion');

describe('Array union', () => {
  test('should return uniq elements from both arrays', () => {
    const arr1 = [1, 1, 1, 2, 3, 6];
    const arr2 = [2, 4, 4, 4, 7, 7];
    expect(getArrayUnion(arr1, arr2)).toEqual([1, 3, 6, 4, 7]);
  });
});
