/* eslint-disable no-undef */
const getArrayIntersection = require('../tasks/getArrayIntersection');

describe('Array union', () => {
  test('should return common elements from both arrays', () => {
    const arr1 = [1, 1, 1, 2, 3, 6];
    const arr2 = [2, 4, 4, 4, 7];
    expect(getArrayIntersection(arr1, arr2)).toEqual([2]);

    const arr3 = [10, 11, 12, 13];
    const arr4 = [14, 15, 16, 17];
    expect(getArrayIntersection(arr3, arr4)).toEqual([]);

    const arr5 = [10, 11, 11, 12, 12, 13, 13];
    const arr6 = [10, 11, 11, 12, 12, 13, 13];
    expect(getArrayIntersection(arr5, arr6)).toEqual([10, 11, 12, 13]);
  });
});
