/* eslint-disable no-unused-vars */
const { customFilterUnique, filterAgeMoreThanTwentyTwoUniqCallback } = require('./tasks/customFilterUnique');
const { chunkArray, chunkArrayInPlace } = require('./tasks/chunkArray');
const arrayShuffling = require('./tasks/arrayShuffling');
const getArrayIntersection = require('./tasks/getArrayIntersection');
const getArrayUnion = require('./tasks/getArrayUnion');

const arr1 = [1, 2, 2, 3, 4, 5];
const arr2 = [3, 3, 2, 7];

const result = getArrayUnion(arr1, arr2);
console.log(result); // [1, 4, 5, 7]
