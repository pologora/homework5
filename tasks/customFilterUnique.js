function customFilterUnique(arr, cb) {
  if (!Array.isArray(arr)) {
    throw new Error('The first argument must be an array.');
  }

  if (typeof cb !== 'function') {
    throw new Error('The second argument must be a callback function.');
  }

  const map = new Map();
  const oneElement = 1;
  const moreThanOneElement = 2;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    const result = cb(element, i, arr);

    if (result) {
      if (map.has(result)) {
        map.set(result, moreThanOneElement);
      } else {
        map.set(result, oneElement);
      }
    }
  }

  const result = [];

  map.forEach((value, key) => {
    if (value === oneElement) {
      result.push(key);
    }
  });

  return result;
}

const filterAgeMoreThanTwentyTwoUniqCallback = (item) => {
  if (item.age > 22) {
    return item.age;
  }
};

module.exports = { customFilterUnique, filterAgeMoreThanTwentyTwoUniqCallback };
