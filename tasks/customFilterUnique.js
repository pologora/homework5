function customFilterUnique(arr, cb) {
  if (!Array.isArray(arr)) {
    throw new Error('The first argument must be an array.');
  }

  if (typeof cb !== 'function') {
    throw new Error('The second argument must be a callback function.');
  }

  const result = [];
  const hashMap = new Map();
  const cbHashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (cb(element, cbHashMap, i, arr)) {
      if (!hashMap.has(element)) {
        hashMap.set(element);
        result.push(element);
      }
    }
  }

  return result;
}

const filterAgeMoreThanTwentyTwoUniqCallback = (item, hashMap) => {
  if (item.age > 22) {
    if (!hashMap.has(item.age)) {
      hashMap.set(item.age);
      return true;
    }
  }
};

module.exports = { customFilterUnique, filterAgeMoreThanTwentyTwoUniqCallback };
