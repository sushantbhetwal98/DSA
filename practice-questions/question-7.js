// Array Chunk
/* Write an function that takes an array and chunk size as an input. the function
should return a new array where the original array is split into chunks of specified
sizes

eg: chunk([1,2,3,4,5,6,7,8,], 3) => [[1,2,3], [4,5,6], [7,8]]
eg: chunk([1,2,3,4,5,6], 2) => [[1,2], [3,4], [5,6]]
*/

const chunk = (array, size) => {
  const newArray = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    newArray.push(chunk);
    index += size;
  }

  return newArray;
};

const result = chunk([1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(result);
