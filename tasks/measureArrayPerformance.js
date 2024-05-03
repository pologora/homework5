function measureArrayPerformance(fn, arr, ...args) {
  const start = performance.now();
  fn(arr, ...args);
  const timeTaken = performance.now() - start;

  return timeTaken;
}

module.exports = measureArrayPerformance;
