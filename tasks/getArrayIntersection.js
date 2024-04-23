function getArrayIntersection(arr1, arr2) {
  const hashMap = new Set(arr1);
  const result = new Set();

  arr2.forEach((element) => {
    if (hashMap.has(element)) {
      result.add(element);
    }
  });

  return Array.from(result);
}

module.exports = getArrayIntersection;
