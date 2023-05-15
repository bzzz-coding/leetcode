/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


https://leetcode.com/problems/two-sum/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (arr, target) => {
  // take in an array of integers, and a target that is an integer
  // returns indices of the two integers that add up to the target
  // there is one and only one pair
  
  // nested loops will have O(n**2) time complexity
  // loops through array once, but keep track of the number needed for each element to add up to target, if we find the number, return indices
  // create a hash table that stores the number needed and the index of the seen element, number: index
  let needObj = {};
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    // check if currentNum is needed; if so, return current index, and index of where the currentNum is needed to add up to target
    if (needObj[currentNum] !== undefined) {
      return [needObj[currentNum], i]
    }
    // else, get the remainingNum, and store it as a key, with the value being the index of the currentNum
    let remainingNum = target - currentNum;
    needObj[remainingNum] = i;
  }
}