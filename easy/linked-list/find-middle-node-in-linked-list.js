/*
Given the head of a linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

https://leetcode.com/problems/middle-of-the-linked-list
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

var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow
};


/*
- Concept: Nodes do not have an index, but a `next` property. 
- Hint: Loop through all the nodes at two speeds `.next` and `.next.next`. By the time the second speed reaches the end, the first will be at the middle. Return what node the first speed is currently at.
- Solution:
  - Starting from the head node, declare two tracks: `slow` and `fast`, `let slow = head;` and `let fast = head;`
    - While fast and fast.next (so that linked lists that have an even number of nodes, the while loop will exit after fast becomes null, and slow reaches the second middle node to be returned):
      - `slow` moves at 1x speed, to `slow.next`
      - `fast` moves at 2x speed, to `fast.next.next` 
  - When `fast` reaches the end of the linked list (`fast.next === null`), `slow` is at the middle of the list
*/