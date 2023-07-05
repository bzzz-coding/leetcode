/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.


*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
  const res = [];
  const sortedNums = nums.sort((a, b) => a - b);
  let prevA = null;
  for (let i = 0; i < sortedNums.length - 2; i++) {
    let currA = sortedNums[i];
    if (currA === prevA) {
      continue;
    }
    prevA = currA; 
    let [l, r] = [i + 1, sortedNums.length - 1]; 
    let [prevB, prevC] = [null, null];
    while (l < r) {
      let [currB, currC] = [sortedNums[l], sortedNums[r]];
      if (currB === prevB) {
        l++;
        continue;
      }
      if (currC === prevC) {
        r--;
        continue;
      }
      if (currB + currC === -currA) {
        res.push([currA, currB, currC]);
        l++;
        r--;
        [prevB, prevC] = [currB, currC];
      } else if (currB + currC < -currA) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, 0, 0, 2, 2]));
console.log(threeSum([1,-1,-1,0]));
