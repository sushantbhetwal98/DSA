// sentence capitalization
// hello world -> Hello World

const capitalizeSentence = (words) => {
  return words
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitalizeSentence("hello world"));
console.log(capitalizeSentence("hELLO wORLD"));
