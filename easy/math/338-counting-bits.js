/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

*/

/**
 * @param {number} n
 * @return {number[]}
 */

const countBits = (n) => {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(countOneBits(i));
  }
  return res
}

const countOneBits = (n) => {
  let res = 0;
  while (n) {
    res += n % 2;
    n = n >> 1;
  }
  return res
}

console.log(countOneBits(3))
console.log(countBits(3))