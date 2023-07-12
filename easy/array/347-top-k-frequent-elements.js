/*
347. Top K Frequent Elements
Medium
14.9K
528
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

https://leetcode.com/problems/top-k-frequent-elements/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// parameter: arr of integers and an int K
// return: arr of most frequent integers, length is K
// bruteforce: hashmap, loop through arr, record frequencies
const topKFrequent = (nums, k) => {
  const hash = {};
  for (const num of nums) {
      if (hash[num] === undefined) {
          hash[num] = [num, 1];
      } else {
          hash[num][1]++;
      }
  }
  // console.log(Object.values(hash))
  // console.log(Object.values(hash).sort((a, b) => b[1] - a[1]))
  return Object.values(hash).sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0]);
};

console.log(topKFrequent([1,1,1,2,2,3], 2))