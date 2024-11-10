// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const myArray = [4, 2, 6, 5, 1, 3];
const insertionSortResult = insertionSort(myArray);
console.log("Insertion sort", insertionSortResult);
