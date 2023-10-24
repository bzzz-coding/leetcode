/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/


// // Compare the fist index i and last index of each int, if they don't match, return true
// function containsDuplicate(nums: number[]): boolean {
//   for (let i = 0; i < nums.length; i++) {
//       const num = nums[i];
//       const lastInd = nums.lastIndexOf(num);

//       if (lastInd !== i) {
//           return true;
//       }
//   }

//   return false;
// };

// When checking duplication in an array, use a set and compare the size of the set to the length of the array

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([1, 2, 3, 4]));



function containsDuplicate(nums: number[]): boolean {
  // Create an empty set
  let numSet = new Set<number>();
  // Loop through nums, if num is in numSet, return true; otherwise, add num to numSet
  for (const num of nums) {
      if (numSet.has(num)) return true;
      numSet.add(num);
  }
  // If exits loop without returning (true), return false -- no duplicate found 
  return false;
};