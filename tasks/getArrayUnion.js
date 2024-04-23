function getArrayUnion(arr1, arr2) {
  const hashMap = new Map();
  const result = [];

  arr1.forEach((element) => {
    hashMap.set(element, (hashMap.get(element) || 0) + 1);
  });

  arr2.forEach((element) => {
    hashMap.set(element, (hashMap.get(element) || 0) + 1);
  });

  hashMap.forEach((value, key) => {
    if (value === 1) {
      result.push(key);
    }
  });

  return result;
}

module.exports = getArrayUnion;
