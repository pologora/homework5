function customShuffle(arr) {
  const array = [...arr];
  const length = array.length;

  for (let i = length - 1; i > 0; i--) {
    const randomIdx = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomIdx]] = [array[randomIdx], array[i]];
  }

  return array;
}

module.exports = customShuffle;
