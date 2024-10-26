// create a function to reverse the string

// hints
// 1. Convert the string to array
// 2. Reverse the array
// 3. convert array ack to the string

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

console.log(reverseString("apple"));
