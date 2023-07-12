/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

// Brute force: 
interface NumHash {
  [propName: string]: number;
}

function topKFrequentBF(nums: number[], k: number): number[] {
  // Create a hashmap, mapping num to its frequency
  const numHash: NumHash = {};
  for (let num of nums) {
      numHash[num] = numHash[num] + 1 || 1;
  }
  // console.log(numHash);

  // Loop through numHash, and push [num, frequency] to frequencyArr
  const frequencyArr: number[][] = [];
  for (const num in numHash) {
      frequencyArr.push([+num, numHash[num]])
  }
  // console.log(frequencyArr);

  // Sort frequencyArr by index 1 of each subarray--most frequent to least
  const sortedFrequencyArr = frequencyArr.sort((a, b) => b[1] - a[1]);
  // console.log(sortedFrequencyArr);

  // Loop through sortedFrequencyArr from i to k(not included), push index 0 values of each subarray into res
  let res: number[] = [];
  for (let i = 0; i < k; i++) {
      const numValue = sortedFrequencyArr[i];
      res.push(numValue[0]);
  }

  return res;
};


// interface NumHash {
//   [propName: string]: number;
// }

function topKFrequent(nums: number[], k: number): number[] {
  // Create a hashmap, mapping num to its frequency
  const numHash:NumHash = {};
  for (let num of nums) {
      numHash[num] = numHash[num] + 1 || 1;
  }

  // Create an array that has the same length of nums
  // Each index represent the frequency, and the value at each index will be an array of (possible) numbers that appear index times
  const frequencyArr: number[][] = Array(nums.length);
  for (const num in numHash) {
      let index = numHash[num];
      if (frequencyArr[index]) {
          frequencyArr[index].push(+num);
      } else {
          frequencyArr[index] = [+num];
      }
  }

  let res: number[] = [];
  // Loop through frequencyArr from back to front, while k > 0
  for (let i = frequencyArr.length - 1; i >= 0; i--) {
      if (res.length === k) {
          break
      }
      if (frequencyArr[i]) { // If frequencyArr[i] is not undefined, spead the array into res, decrement k
          res = [...res, ...frequencyArr[i]];
      }
  }

  return res;
}

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))