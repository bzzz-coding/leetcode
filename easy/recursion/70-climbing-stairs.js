/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Constraints:
1 <= n <= 45

https://leetcode.com/problems/climbing-stairs/
*/

/**
 * @param {number} n
 * @return {number}
 */

// // this solution is too slow and got timed out
// const climbStairs = (n) => {
//   if (n <= 1) return 1;
//   return climbStairs(n - 1) + climbStairs(n-2);
// };

let cache = {0: 1, 1: 1};
const climbStairs = (n) => {
  if (cache[String(n)]) return cache[String(n)];
  // console.log(`${n} not in cache`);
  let result = climbStairs(n - 1) + climbStairs(n-2);
  cache[String(n)] = result;
  // console.log(cache);
  return result;
};

console.log(climbStairs(4));
console.log(climbStairs(5));
