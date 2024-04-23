function chunkArray(arr, chunkSize) {
  if (chunkSize <= 0) {
    throw new Error('Chunk size should be more than 0');
  }

  const result = [];
  const allChunks = Math.ceil(arr.length / chunkSize);

  let start = 0;
  let end = start + chunkSize;

  for (let i = 0; i < allChunks; i++) {
    result.push(arr.slice(start, end));
    start = end;
    end += chunkSize;
  }

  return result;
}

function chunkArrayInPlace(arr, chunkSize) {
  if (chunkSize <= 0) {
    throw new Error('Chunk size should be more than 0');
  }

  const allChunks = Math.ceil(arr.length / chunkSize);

  let start = 0;
  let end = start + chunkSize;

  for (let i = 0; i < allChunks; i++) {
    arr[i] = arr.slice(start, end);
    start = end;
    end += chunkSize;
  }

  arr.length = allChunks;
  return arr;
}

module.exports = { chunkArray, chunkArrayInPlace };
