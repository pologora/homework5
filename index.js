/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { customFilterUnique, filterAgeMoreThanTwentyTwoUniqCallback } = require('./tasks/customFilterUnique');
const { chunkArray, chunkArrayInPlace } = require('./tasks/chunkArray');
const customShuffle = require('./tasks/customShuffle');
const getArrayIntersection = require('./tasks/getArrayIntersection');
const getArrayUnion = require('./tasks/getArrayUnion');
const measureArrayPerformance = require('./tasks/measureArrayPerformance');

const miniArr = new Array(10_000).fill(Math.floor(Math.random() * 2));
const midArr = new Array(100_000).fill(Math.floor(Math.random() * 2));
const bigArr = new Array(1_000_000).fill(Math.floor(Math.random() * 2));
const hugeArr = new Array(1_000_000_0).fill(Math.floor(Math.random() * 2));

function forloop(arr) {
  // eslint-disable-next-line no-empty
  for (let i = 0; i < arr.length; i++) {}
}

function map(arr) {
  arr.map((i) => i);
}

function filter(arr) {
  arr.filter((i) => i === 1);
}

function reduce(arr) {
  arr.reduce((acc, i) => acc + i, 1);
}

function foreach(arr) {
  arr.forEach(() => {});
}

function testCustomFilterUnique(arr) {
  customFilterUnique(arr, (i) => i > 0);
}

function testChunkArrayByTwo(arr) {
  chunkArray(arr, 2);
}

function testChunkArrayByTwoInPlace(arr) {
  chunkArrayInPlace(arr, 2);
}

function testGetArrayIntersection(arr) {
  getArrayIntersection(arr, arr);
}

function testGetArrayUnion(arr) {
  getArrayUnion(arr, arr);
}

const functionsList = [
  forloop,
  map,
  filter,
  reduce,
  foreach,
  testCustomFilterUnique,
  testChunkArrayByTwo,
  testChunkArrayByTwoInPlace,
  customShuffle,
  testGetArrayIntersection,
  testGetArrayUnion,
];

for (let i = 0; i < functionsList.length; i++) {
  const executionTime = measureArrayPerformance(functionsList[i], hugeArr);

  console.log(`Function ${functionsList[i].name} - ${executionTime.toFixed(2)}`);
}
