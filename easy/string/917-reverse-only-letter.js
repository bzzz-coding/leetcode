/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"


*/

/**
 * @param {string} s
 * @return {string}
 */

const reverseOnlyLetters = s => {
  let letterArr = [];
  let res = '';
  const reg = /[a-z]/i;
  for (const char of s) {
    if (reg.test(char)) {
      letterArr.push(char);
    }
  }
  for (const char of s) {
    if (reg.test(char)) {
      res += letterArr.pop();
    } else {
      res += char;
    }
  }
  return res;
};

console.log(reverseOnlyLetters('a-bC-dEf-ghIj'))