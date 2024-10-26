// integer or number reversal
// 1. convert the number to string
// 2. convert the string to array
// 3. reverse the array
// 4. convert the array back to string
// 5. convert the string back to number
// 6. Return the number

const reverseNumber = (number) => {
  return parseInt(number.toString().split("").reverse().join(""));
};

console.log(reverseNumber(-12345));
