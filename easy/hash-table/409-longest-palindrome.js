/*

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.


https://leetcode.com/problems/longest-palindrome/

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/


/**
 * @param {string} s
 * @return {number}
 */

const longestPalindrome = (s) => {
  let dictionary = s.split('').reduce((obj, char) => {
    obj[char] = obj[char] + 1 || 1;
    return obj
  }, {});
 
  let accumulatedCount = 0;
  let oddCount = false;
  
  for (const char in dictionary) {
    let count = dictionary[char];
    if (count % 2 === 0) {
      accumulatedCount += count;
    }
    else {
      oddCount = true;
      accumulatedCount += count - 1;
    }
  }

  if (oddCount) {
    accumulatedCount += 1;
  }
  
  return accumulatedCount;
};

console.log(longestPalindrome('abccccdd'));