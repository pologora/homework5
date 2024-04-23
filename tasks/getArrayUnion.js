function getArrayUnion(arr1, arr2) {
  const hashMap = new Map();
  const result = [];

  arr1.forEach((element) => {
    if (!hashMap.has(element)) {
      hashMap.set(element, 1);
    }
  });

  arr2.forEach((element) => {
    if (hashMap.has(element)) {
      hashMap.set(element, 2);
    } else {
      hashMap.set(element, 1);
    }
  });

  hashMap.forEach((value, key) => {
    if (value === 1) {
      result.push(key);
    }
  });

  return result;
}

module.exports = getArrayUnion;
