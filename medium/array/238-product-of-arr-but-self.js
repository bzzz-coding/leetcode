/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// parameter: arr of integers
// return: arr of same length, at each index, the element is the product of the other nums in the arr
// brute force but O(n ** 2): 
// const productExceptSelf = nums => {
//   let res = Array(nums.length).fill(1);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < res.length; j++) {
//       if (i !== j) {
//         res[j] *= nums[i];
//       }
//     }
//   } 
//   return res;
// };

// for each num of nums, there is a prefix (1 for the index 0), and a postfix (1 for last index, but post fix is the same way we calculate prefix but loop from back to front)
// for res, multiply in prefix, then loop from the back of nums, multiply in postfix

const productExceptSelf = nums => {
  const arrLength = nums.length
  const res = Array(arrLength).fill(1);
  let prefix = 1;
  for (let i = 0; i < arrLength; i++) {
    res[i] *= prefix;
    prefix *= nums[i];
  }
  let postfix = 1;
  for (let i = arrLength - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]))