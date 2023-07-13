/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

// The solution is to use two-pointers
// Create a regex to test for numbers and alphabets
// If the l or r pointer points to a special character, shift the pointer and continue with the loop
// Otherwise, check for equation. Return false or shift both pointers for the next iteration  

function isPalindrome(s: string): boolean {
  let [l, r] = [0, s.length - 1];
  let reg = /[a-z0-9]/i;
  while (l < r) {
      if (!reg.test(s[l])) {
          l++;
          continue;
      }
      if (!reg.test(s[r])) {
          r--;
          continue;
      }
      if (s[l]?.toLowerCase() !== s[r]?.toLowerCase()) {
          return false;
      }

      l++;
      r--;
  }
  return true;
};