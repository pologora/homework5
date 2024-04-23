## Task 1, customFilterUnique function

```JavaScript
const { customFilterUnique } = require('./tasks/customFilterUnique');
```

```javascript
/**
 * Filters an array based on a callback function and ensures uniqueness.
 * @param {Array} arr - The array to filter.
 * @param {Function} cb - The callback function to determine inclusion.
 * @returns {Array} - The filtered array containing unique elements.
 */
customFilterUnique(arr, cb);
```

### Cb function

```JavaScript
/**
 * Callback function to filter objects or primitives, hashMap parametr is used to truck uniqueness for
 * an objects, doesn't needed for a primitive values
 * @param {Object | primitive} item - The current item being processed.
 * @param {Map} hashMap  - (Optional) The map used for tracking uniqueness.
 * @param {number} index - (Optional) Current element index.
 * @param {Array} array - (Optional) An array on which the callback function elements is called.
 * @returns {boolean} - Returns true if the item meets the criteria, otherwise returns false.
 */
const cb = (item, hashMap, index, array) => {
if (item.age > 22) {
    if (!hashMap.has(item.age)) {
      hashMap.set(item.age);
      return true;
    }
  }
};
```

## Task 2, chunkArray, chunkArrayInPlace functions

### Info

- chunkArray - returns new function
- chunkArrayInPlace - mutates the original array

### Usage

```JavaScript
const { chunkArray, chunkArrayInPlace } = require('./tasks/chunkArray');

const arr = [1, 2, 3, 4];
const chunkSize = 2;

const result = chunkArray(arr, chunkSize);
console.log(result); // [[1,2], [3,4]]
console.log(arr); // [1, 2, 3, 4]

chunkArrayInPlace(arr, chunkSize);
console.log(arr); // [[1,2], [3,4]]
```

## Task 3, arrayShuffling function

### Info

Utilize Fisher-Yates shuffle algorithm

### Usage

```JavaScript
const arrayShuffling = require('./tasks/arrayShuffling');

const arr = [1, 2, 3, 4, 5];
const result = arrayShuffling(arr);

console.log(result); // [2,5,1,3,4]
```
