## Task 1, customFilterUnique function

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
 * an objects, don't needed for a primitive values
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
