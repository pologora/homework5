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

    if (cb(element, map, i, arr)) {
      if (map.has(element)) {
        map.set(element, moreThanOneElement);
      } else {
        map.set(element, oneElement);
      }
    }
  }

  const result = [];

  map.forEach((value, key) => {
    if (value === oneElement) {
      result.push(key);
    }
  });

  console.log(result);

  return result;
}

const filterAgeMoreThanTwentyTwoUniqCallback = (item) => {
  if (item.age > 22) {
    return true;
  }
};

module.exports = { customFilterUnique, filterAgeMoreThanTwentyTwoUniqCallback };
