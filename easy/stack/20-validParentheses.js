/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

https://leetcode.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s) {
  const parenthesesArr = ['()', '[]', '{}'];
  
  // const parenthesesObj = createObj(parenthesesArr);
  // create an obj that has the closing parentheses as keys and their corresponding opening parentheses as values
  const parenthesesObj = parenthesesArr.reduce((obj, pair) => {
    obj[pair[1]] = pair[0];
    return obj
  }, {})
  console.log(parenthesesObj);

  // loop through array splitted from s, and create a stack that keep track of unclosed opening parentheses
  let openParentheses = [];
  let arr = s.split('');
  console.log(arr);
  for (let parenthesis of arr) {
    if (parenthesesObj[parenthesis]) {
      if (parenthesesObj[parenthesis] === openParentheses[openParentheses.length - 1]) {
        openParentheses.pop();
      }
      else return false
    } 
    if (!parenthesesObj[parenthesis]) {
      openParentheses.push(parenthesis)
    }
    console.log(openParentheses);
  }
  return !openParentheses.length
}

console.log(isValid('()[]{}'));