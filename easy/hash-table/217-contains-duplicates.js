/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

https://leetcode.com/problems/contains-duplicate/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  let numsHash = {};
  for (const num of nums) {
    if (numsHash[num]) return true;
    numsHash[num] = true;
  }
  return false
}