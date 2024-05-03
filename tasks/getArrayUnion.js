function getArrayUnion(arr1, arr2) {
  const result = new Set([...arr1, ...arr2]);

  return [...result];
}

module.exports = getArrayUnion;
