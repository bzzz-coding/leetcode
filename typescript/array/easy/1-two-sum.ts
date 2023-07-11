/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSumLoop(nums: number[], target: number): number[] | undefined {
  // Nested loops, check all possibilities
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) return [i, j];
      }
  }
};

interface IndexHash {
  [propName: string] : number;
}

function twoSumHash(nums: number[], target: number): number[] | undefined {
  // Linear solution, use a hashmap to track past numbers and store their indices
  const indexHash: IndexHash = {};
  for (let i = 0; i < nums.length; i++) {
      const currNum = nums[i];
      const diff = target - currNum;
      // If the difference is in the hashmap, return the stored index and current index i
      // Note: it's important to specifically check for undefined, or it would fail the edge case of indexHash[diff] === 0
      if (indexHash[diff] !== undefined) return [indexHash[diff], i];
      // Otherwise, sotre currNum and its index in the hashmap
      indexHash[currNum] = i; 
  }
  // No need to add a return becuase it's guaranteed to have one and only one correct answer--the function should return in the middle of the loop
}

