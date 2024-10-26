/* Two Sum

Imagine you have a list of numbers and a target number. Your job is to find two
numbers in that list that add up to the target number. You also need to tell which
positions (or indexes) those two numbers are at in the list.

Example 
if the list is [2,7,11,15] and the target is 9, then the answer would be [0,1] 
because 2 (at index 0) plus 7 (at index 1) equals 9. 
*/

// this is the ugly code we are doing right now as we are noobies and we will do this
// in more efficient manner later
const twoSum = (nums, target) => {
  // loop through each number in the lsit
  for (let i = 0; i < nums.length - 1; i++) {
    // for each number; check the rest of the list
    for (let j = i + 1; j < nums.length; j++) {
      // if the current number and the one we are checking add upto the target,
      // return their indexes
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

const indexes = twoSum([2, 7, 11, 15], 26);
console.log(indexes);
