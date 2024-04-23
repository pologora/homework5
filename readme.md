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
 * Callback function to filter objects or primitives, set parametr is used to truck uniqueness for
 * an objects, doesn't needed for a primitive values
 * @param {Object | primitive} item - The current item being processed.
 * @param {Set} set  - (Optional) The set used for tracking uniqueness.
 * @param {number} index - (Optional) Current element index.
 * @param {Array} array - (Optional) An array on which the callback function elements is called.
 * @returns {boolean} - Returns true if the item meets the criteria, otherwise returns false.
 */

const arr = [
      { name: 'liza1', age: 22 },
      { name: 'liza2', age: 23 },
      { name: 'liza3', age: 25 },
      { name: 'liza4', age: 25 },
    ];

const cb = (item, set, index, array) => {
if (item.age > 22) {
    if (!set.has(item.age)) {
      set.add(item.age);
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

## Task 4, getArrayIntersection, getArrayUnion functions

### getArrayIntersection

### Info

Takes two arrays as arguments and returns a new array containing the common elements between the two arrays

### Usage

```JavaScript
const getArrayIntersection = require('./tasks/getArrayIntersection');

const arr1 = [1, 2, 2, 3, 4, 5];
const arr2 = [3, 3, 2, 7];

const result = getArrayIntersection(arr1, arr2);
console.log(result); // [3,2]
```

### getArrayUnion

### Info

Takes two arrays as arguments and returns a new array containing all unique elements from both arrays, without any duplicates

### Usage

```JavaScript
const getArrayUnion = require('./tasks/getArrayUnion');

const arr1 = [1, 1, 2, 2, 3, 4, 5];
const arr2 = [3, 3, 2, 7, 7];

const result = getArrayUnion(arr1, arr2);
console.log(result); // [1, 4, 5, 7]
```

## Task 5, measureArrayPerformance

### Tests index.js

```JavaScript
const miniArr = new Array(10_000).fill(Math.floor(Math.random() * 2));
const midArr = new Array(100_000).fill(Math.floor(Math.random() * 2));
const bigArr = new Array(1_000_000).fill(Math.floor(Math.random() * 2));
const hugeArr = new Array(10_000_000).fill(Math.floor(Math.random() * 2));

------------ for loop --------------
Total time taken : 0.29299999999999216 milliseconds
Total time taken : 0.35719999999999175 milliseconds
Total time taken : 0.6580000000000013 milliseconds
Total time taken : 6.383099999999999 milliseconds

--------- Foreach ----------
Total time taken : 0.4309000000000083 milliseconds
Total time taken : 1.2399000000000058 milliseconds
Total time taken : 9.683899999999994 milliseconds
Total time taken : 97.51829999999998 milliseconds

--------- Array Shuffling ------------
Total time taken : 14.62469999999999 milliseconds
Total time taken : 3.512900000000002 milliseconds
Total time taken : 41.3562 milliseconds
Total time taken : 536.316 milliseconds

--------- Chunk Array ----------
Total time taken : 0.5093000000000529 milliseconds
Total time taken : 2.98599999999999 milliseconds
Total time taken : 79.79169999999999 milliseconds
Total time taken : 968.4157 milliseconds

--------- Chunk Array In Place----------
Total time taken : 0.4758999999999105 milliseconds
Total time taken : 2.983600000000024 milliseconds
Total time taken : 176.43139999999994 milliseconds
Total time taken : 871.6392999999998 milliseconds

--------- Intersection Array ----------
Total time taken : 1.481999999999971 milliseconds
Total time taken : 9.939600000000155 milliseconds
Total time taken : 178.55449999999973 milliseconds
Total time taken : 4136.6422999999995 milliseconds

--------- Union Array ----------
Total time taken : 1.893000000000029 milliseconds
Total time taken : 16.33220000000074 milliseconds
Total time taken : 218.60189999999966 milliseconds
Total time taken : 4514.3335 milliseconds

--------- Filter Uniq Array ----------
Total time taken : 304.83350000000064 milliseconds
Total time taken : 20.265300000000934 milliseconds
Total time taken : 162.42510000000038 milliseconds
Total time taken : 1486.1756999999998 milliseconds

--------- Map ----------
Total time taken : 1.3070999999999913 milliseconds
Total time taken : 11.530300000000352 milliseconds
Total time taken : 161.9933000000001 milliseconds
Total time taken : 1576.2446999999993 milliseconds

--------- Filter ----------
Total time taken : 1.641300000001138 milliseconds
Total time taken : 28.392500000001746 milliseconds
Total time taken : 156.91760000000068 milliseconds
Total time taken : 1529.4764000000014 milliseconds

--------- Reduce ----------
Total time taken : 1.2855999999992491 milliseconds
Total time taken : 13.797699999999168 milliseconds
Total time taken : 178.41489999999976 milliseconds
Total time taken : 1886.879100000002 milliseconds
```
