// example of recursive function
function countDown(number) {
  if (number === 0) {
    console.log("And finally the stopping point.");
    return;
  }
  console.log(number);
  setTimeout(() => {
    countDown(number - 1);
  }, 1000);
}

// countDown(5);

// find the factorial of a number with recursive function

function factorial(number) {
  return number === 0 ? 1 : number * factorial(number - 1);
}

console.log("factorial", factorial(5));
