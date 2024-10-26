// #region example of O(n)

const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

// this is the o(n) function
const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`found item: ${item}`);
    }
  }

  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`Found in second loop :${item}`);
    }
  }
  // n + n = 2n -> O(2n)
  // but drop the constant so it becomes O(n)
};

searchForItem("eggs");

// #endregion example of O(n)

// #region example of O(1)

const numbers = [1, 2, 3, 4, 5];

// this function is called the O(1)
const getElement = (arr, index) => {
  console.log(arr[index]);
};
getElement(numbers, 3);

// #endregion example of O(1)

// #region exapmple of O(n^2)

function findPairs(arr) {
  // O(n^2)
  for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pairs: (${arr[i]}, ${arr[j]})`);
    }
  }

  // o(n)
  for (let k = 1; k < arr.length; k++) {
    console.log(`--------- ${arr[k]}`);
  }

  // if we combine all the operations it becomes O(n^2 + n)
  // O(n^2) is the dominent term
  // "n" is the non-dominent term
  //  so we remove the non-dominent term and we're only left with the O(n^2)
  // this way we simplify our Big O
}

findPairs(numbers);

// #endregion exapmple of O(n^2)
