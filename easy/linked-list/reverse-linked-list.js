/*
Given the head of a singly linked list, reverse the list, and return the reversed list.


https://leetcode.com/problems/reverse-linked-list/
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) return head
  let current = head;
  let previous = null;
  while (current !== null) {
    // let temp = current.next;
    // current.next = previous;
    // previous = current;
    // current = temp;
    [current.next, previous, current] = [previous, current, current.next]
  }
  return previous
};