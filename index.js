/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { customFilterUnique, filterAgeMoreThanTwentyTwoUniqCallback } = require('./tasks/customFilterUnique');
const { chunkArray, chunkArrayInPlace } = require('./tasks/chunkArray');
const arrayShuffling = require('./tasks/arrayShuffling');
const getArrayIntersection = require('./tasks/getArrayIntersection');
const getArrayUnion = require('./tasks/getArrayUnion');
const measureArrayPerformance = require('./tasks/measureArrayPerformance');

const miniArr = new Array(10_000).fill(Math.floor(Math.random() * 2));
const midArr = new Array(100_000).fill(Math.floor(Math.random() * 2));
const bigArr = new Array(1_000_000).fill(Math.floor(Math.random() * 2));
const hugeArr = new Array(1_000_000_0).fill(Math.floor(Math.random() * 2));

function forloop(arr) {
  for (let i = 0; i < arr.length; i++) {}
}

function map(arr, cb) {
  arr.map(cb);
}

function filter(arr, cb) {
  arr.filter(cb);
}

function reduce(arr, cb) {
  arr.reduce(cb);
}

function foreach(arr, cb) {
  arr.forEach(cb);
}

console.log('------------ for loop --------------');
measureArrayPerformance(forloop, miniArr);
measureArrayPerformance(forloop, midArr);
measureArrayPerformance(forloop, bigArr);
measureArrayPerformance(forloop, hugeArr);

console.log('--------- Foreach ----------');
measureArrayPerformance(foreach, miniArr, (i) => i > 0);
measureArrayPerformance(foreach, midArr, (i) => i > 0);
measureArrayPerformance(foreach, bigArr, (i) => i > 0);
measureArrayPerformance(foreach, hugeArr, (i) => i > 0);

console.log('--------- Array Shuffling ------------');
measureArrayPerformance(arrayShuffling, miniArr);
measureArrayPerformance(arrayShuffling, midArr);
measureArrayPerformance(arrayShuffling, bigArr);
measureArrayPerformance(arrayShuffling, hugeArr);

console.log('--------- Chunk Array ----------');
measureArrayPerformance(chunkArray, miniArr, 2);
measureArrayPerformance(chunkArray, midArr, 2);
measureArrayPerformance(chunkArray, bigArr, 2);
measureArrayPerformance(chunkArray, hugeArr, 2);

console.log('--------- Chunk Array In Place----------');
measureArrayPerformance(chunkArrayInPlace, miniArr, 2);
measureArrayPerformance(chunkArrayInPlace, midArr, 2);
measureArrayPerformance(chunkArrayInPlace, bigArr, 2);
measureArrayPerformance(chunkArrayInPlace, hugeArr, 2);

console.log('--------- Intersection Array ----------');
measureArrayPerformance(getArrayIntersection, miniArr, miniArr);
measureArrayPerformance(getArrayIntersection, midArr, midArr);
measureArrayPerformance(getArrayIntersection, bigArr, bigArr);
measureArrayPerformance(getArrayIntersection, hugeArr, hugeArr);

console.log('--------- Union Array ----------');
measureArrayPerformance(getArrayUnion, miniArr, miniArr);
measureArrayPerformance(getArrayUnion, midArr, midArr);
measureArrayPerformance(getArrayUnion, bigArr, bigArr);
measureArrayPerformance(getArrayUnion, hugeArr, hugeArr);

console.log('--------- Filter Uniq Array ----------');
measureArrayPerformance(customFilterUnique, miniArr, (i) => i > 0);
measureArrayPerformance(customFilterUnique, midArr, (i) => i > 0);
measureArrayPerformance(customFilterUnique, bigArr, (i) => i > 0);
measureArrayPerformance(customFilterUnique, hugeArr, (i) => i > 0);

console.log('--------- Map ----------');
measureArrayPerformance(map, miniArr, (i) => i + 1);
measureArrayPerformance(map, midArr, (i) => i + 1);
measureArrayPerformance(map, bigArr, (i) => i + 1);
measureArrayPerformance(map, hugeArr, (i) => i + 1);

console.log('--------- Filter ----------');
measureArrayPerformance(filter, miniArr, (i) => i > 0);
measureArrayPerformance(filter, midArr, (i) => i > 0);
measureArrayPerformance(filter, bigArr, (i) => i > 0);
measureArrayPerformance(filter, hugeArr, (i) => i > 0);

console.log('--------- Reduce ----------');
measureArrayPerformance(reduce, miniArr, (acc, i) => acc + i, 0);
measureArrayPerformance(reduce, midArr, (acc, i) => acc + i, 0);
measureArrayPerformance(reduce, bigArr, (acc, i) => acc + i, 0);
measureArrayPerformance(reduce, hugeArr, (acc, i) => acc + i, 0);
