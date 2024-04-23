function customFilterUnique(arr, cb) {
  if (!Array.isArray(arr)) {
    throw new Error('The first argument must be an array.');
  }

  if (typeof cb !== 'function') {
    throw new Error('The second argument must be a callback function.');
  }

  const result = [];
  const set = new Set();
  const cbSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (cb(element, cbSet, i, arr)) {
      if (!set.has(element)) {
        set.add(element);
        result.push(element);
      }
    }
  }

  return result;
}

const filterAgeMoreThanTwentyTwoUniqCallback = (item, set) => {
  if (item.age > 22) {
    if (!set.has(item.age)) {
      set.add(item.age);
      return true;
    }
  }
};

module.exports = { customFilterUnique, filterAgeMoreThanTwentyTwoUniqCallback };
