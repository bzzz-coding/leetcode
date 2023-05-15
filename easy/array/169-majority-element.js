/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

https://leetcode.com/problems/majority-element/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
  let obj = {};
  let n = nums.length;
  for (const element of nums) {
    obj[element] = obj[element] + 1 || 1;
    if (obj[element] > n/2) {
      return element;
    }
  }
};

console.log(majorityElement([2,2,1,1,1,2,2]));
