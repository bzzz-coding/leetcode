/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

https://leetcode.com/problems/valid-palindrome/
*/

const isPalindrome = (s) => {
  let [i, j] = [0, s.length - 1];
  while (i < j) {
    let charL = s[i];
    let charR = s[j];
    // console.log(`l: ${charL}; r: ${charR}`)
    if (!/[a-z0-9]/i.test(charL)) {
      i++
      continue
    }
    if (!/[a-z0-9]/i.test(charR)) {
      j--
      continue
    }
    if (charL.toLowerCase() !== charR.toLowerCase()) {
      return false
    } 
    i++;
    j--;
    // console.log(`i: ${i}, j: ${j}`)
  }
  return true
}

console.log(isPalindrome('Race a car'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('aa'));