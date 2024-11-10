// merge sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  result.push(...leftArr.slice(i));
  result.push(...rightArr.slice(j));
  return result;
}

const result = mergeSort([38, 27, 43, 3, 9, 82, 10]);
console.log(result);
