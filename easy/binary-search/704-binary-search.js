/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.

https://leetcode.com/problems/binary-search/
*/

const search = (nums, target) => {
  // assign end indices to l, r
  let [left, right] = [0, nums.length-1];
  while (left <= right) {
    console.log(`left: ${left}, right: ${right}`);
    // 3, 10; 4, 8; 5
    let mid = Math.floor((right - left) / 2) + left;
    let midNum = nums[mid];
    console.log(`mid: ${mid}, midNum: ${midNum}`);
    if (midNum === target) {
      console.log(`found it!`);
      return mid;
    }
    if (midNum < target) {
      left = mid+1;
    } else {
      right = mid - 1;
    }
  }
  return -1
};

console.log(search([2, 5], 5))
