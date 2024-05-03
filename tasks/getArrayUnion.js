function getArrayUnion(arr1, arr2) {
  const firstArrSet = new Set(arr1);
  const secondArrSet = new Set(arr2);
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!secondArrSet.has(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!firstArrSet.has(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}

module.exports = getArrayUnion;
