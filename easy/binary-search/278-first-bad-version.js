/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Constraints:

1 <= bad <= n <= 231 - 1

https://leetcode.com/problems/first-bad-version/
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let [left, right] = [1, n];
    while (left <= right) {
      let mid = Math.floor((right - left) / 2) + left;
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) return mid;
        right = mid - 1;
      } else if (!isBadVersion(mid)) {
        left = mid + 1
      }
    }
  };
};

/*
binary search, keep moving left and right to find mid
if mid is bad, everything on the right is bad, first check the one on the left, if good, return mid, if also bad, check left half
if mid is not bad, check right half
*/