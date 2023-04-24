/*
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

https://leetcode.com/problems/palindrome-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} head
 * @return {boolean}
 */

// go through the list and track values, and if currentNode.val === nextNode.val, start tracking? 
// slow: get all values and then check the array of values 
var isPalindrome = function(head) {
  if (!head.next) return true
  let currentNode = head;
  let valueArr = [head.val];
  while (currentNode.next) {
    currentNode = currentNode.next;
    valueArr.push(currentNode.val);
  }
  console.log(`valueArr: ${valueArr}`);
  let arrLength = valueArr.length;
  let middleIndex = Math.floor(arrLength / 2);
  for (let i = 0; i <= middleIndex; i++) {
    if (valueArr[i] !== valueArr[arrLength - i - 1]) {
      return false
    }
  }

  return true
};