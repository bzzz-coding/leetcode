/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.

https://leetcode.com/problems/backspace-string-compare/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// parameter -> two strings where '#' means deleting the previous character
// return -> true or false, based on whether the strings are the same after "performing" the backspaces
// 'ab#c' 'ac#c' -> true 'ac'
// 'aa##' 'ab#' -> false '' 'a'
// '#' '####' -> true ''
// lower case only, no other special characters 

// loop through s, t, and create a stack for each, and remove the last character in the stack whenever we encounter a '#', then, compare the two stacks
const backspaceCompare = (s, t) => {
  const backspacedString = (str) => {
    let strStack = '';
    for (let i = 0; i < str.length; i ++) {
      let char = str[i];
      if (char === '#') {
        strStack = strStack.length > 1 ? strStack.slice(0,-1) : '';
      } else {
        strStack += char;
      }
    }
    return strStack;
  }
  return backspacedString(s) === backspacedString(t);
};

console.log(backspaceCompare('ab#c', 'ac#c'), 'true');
console.log(backspaceCompare('a#c', 'c#c'), 'true');
console.log(backspaceCompare('ab##c', 'ac#c'), 'false');
console.log(backspaceCompare('#', '##'), 'true');
console.log(backspaceCompare('a#b#', 'ab##'), 'true');