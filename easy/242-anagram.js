/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


https://leetcode.com/problems/valid-anagram/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
  let charObj = s.split('').reduce((obj, char) => {
    obj[char] = obj[char] + 1 || 1;
    return obj;
  }, {});
  let tArr = t.split('');
  let charAtMax = 0;
  for (const char of tArr) {
    if (!charObj[char]) return false;
    charObj[char] -= 1;
    if (charObj[char] === 0) {
      charAtMax++;
    }
  }
  return Object.keys(charObj).length === charAtMax;
};