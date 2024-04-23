function measureArrayPerformance(fn, arr, ...args) {
  let start = performance.now();
  fn(arr, ...args);
  let timeTaken = performance.now() - start;
  // eslint-disable-next-line no-console
  console.log('Total time taken : ' + timeTaken + ' milliseconds');
}

module.exports = measureArrayPerformance;
