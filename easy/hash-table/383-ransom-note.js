/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

https://leetcode.com/problems/ransom-note/
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// no need to consider empty strings
// lower case only
const canConstruct = (ransomNote, magazine) => {
  let magazineObj = magazine.split('').reduce((obj, letter) => {
    obj[letter] = obj[letter] + 1 || 1;
    return obj;
  }, {});
  for (const letter of ransomNote) {
    if (!magazineObj[letter]) return false;
    magazineObj[letter] -= 1;
  }
  return true;
};