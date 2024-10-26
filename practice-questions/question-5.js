// FizzBuzz challenge
// print number from 1 to n
// if the number is divisible by 3, print Fizz
// if the number is divisible by 5, print Buzz
// if the number is divisible by 5 and 5, print FizzBuzz
// else, print the number

const fizzBuzzFunction = (n) => {
  for (i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzzFunction(20);
