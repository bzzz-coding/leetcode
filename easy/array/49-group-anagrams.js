/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// const groupAnagrams = (strs) => {
//   let seen = {};
//   let res = [];

//   for (let str of strs) {
//     let sortedStr = str.split('').sort().join('');
//     console.log(`sorted str: ${sortedStr}`);
//     if (seen[sortedStr] === undefined) {
//       seen[sortedStr] = res.length;
//       res[res.length] = [str];
//     } else {
//       res[seen[sortedStr]].push(str);
//     }
//   }
//   return res;
// };

const groupAnagrams = (strs) => {
  let seen = {};
  let res = [];

  for (const str of strs) {
    const arr = Array(26).fill(0);
    for (const char of str) {
      const i = char.charCodeAt(0) - 97;
      arr[i] += 1;
    }
    const key = arr.join('-');
    if (seen[key]) {
      seen[key].push(str);
    } else {
      seen[key] = [str];
    }
  }

  return Object.values(seen);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))