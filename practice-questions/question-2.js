// check for the palinderome words
// if the reverse string is equal to the original string then the word is called palindrome

const reverseString = (word) => {
  return word.split("").reverse().join("");
};

const checkForPalindrome = (word) => {
  return word === reverseString(word);
};

console.log(checkForPalindrome("abba"));
