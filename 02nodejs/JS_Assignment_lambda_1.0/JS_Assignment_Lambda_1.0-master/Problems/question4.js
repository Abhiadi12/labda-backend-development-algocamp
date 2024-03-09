/**
 * 
Implement a function chunk(array, [size=1]) that splits the input array into groups of length size 
and returns them within a new array. If array can't be split evenly, the final chunk will be the 
remaining elements. The function should not modify the original input array.

Arguments
    array (Array): The array to process.
    [size=1] (number): The length of each chunk.
Returns
    (Array): Returns the new array of chunks.

Examples
    chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
    chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
    chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]
    The function should return an empty array if the array argument is empty.

Read more about it here: https://lodash.com/docs/#chunk
 */

/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
export default function chunk(array, size = 1) {
  if (array.length == 0) return [];
  if (size == array.length) return array;
  let ans = [];
  let parts = parseInt(array.length / size);
  let j = 0;
  for (let i = 0; i < parts; i++) {
    let temp = [];
    let count = size;
    while (count > 0) {
      temp.push(array[j++]);
      count--;
    }
    ans.push(temp);
  }
  if (j < array.length) {
    let temp = [];
    for (let i = j; i < array.length; i++) {
      temp.push(array[i]);
    }
    ans.push(temp);
  }
  return ans;
}

// console.log(chunk([1, 2, 3, 4, 5], 2));
