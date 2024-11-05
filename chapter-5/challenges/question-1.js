/* 
 create a word counter taking a sentence 
 example 
 text = 'Hello my name name is sushant';
 output -> 
 Hello = 1;
 my = 1;
 name = 2;
 is = 1;
 sushant = 1;
 */

function wordCounter(text) {
  const lowerText = text.toLowerCase();
  const wordMap = {};
  const words = lowerText.split(/\s+/);
  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
}

console.log(wordCounter("hello my name name name is sushant"));
