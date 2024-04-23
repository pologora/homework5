function customFilterUnique(arr, cb) {
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
      return item;
    }
  }
};

module.exports = { customFilterUnique, filterAgeMoreThanTwentyTwoUniqCallback };
