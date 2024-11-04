const reverseString = (string) => {
  const stack = [];

  for (let char of string) {
    stack.push(char);
  }

  let reverseString = "";
  while (stack.length > 0) {
    reverseString += stack.pop();
  }
  return reverseString;
};

console.log(reverseString("Sushant"));
