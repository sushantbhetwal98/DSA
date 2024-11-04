/* check the valid parenthesis like 
[{()}] -> true
[]{})() -> true
[{(]}) -> false
 */
const isValidParenthesis = (string) => {
  const stack = [];
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let char of string) {
    if (brackets[char]) {
      //   console.log("pushing", char);
      stack.push(char);
    } else {
      const top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValidParenthesis("[{()}]")); //true
console.log(isValidParenthesis("[{(})]")); //false
