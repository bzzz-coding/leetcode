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

// starts with first node, two pointers, one at x1 speed and the other at x2 speed
// if 5 nodes, return the 3rd; 2nd and 3rd, 3rd and 5th, 5th is the end, return 3rd
// if 6 nodes, return the 4th; 2nd and 3rd, 3rd and 5th, 5th has a next which is the end, so return 4th

function findMiddleNode(firstNode) {
  // start both pointers from firstNode
  let slow = firstNode;
  let fast = firstNode;
  // if both fast and fast.next exist, update slow and fast
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next; // might be null, will decide if while loop continues
  }
  // if list has only 1 node, while loop is skipped and firstNode is returned
  // else if while loop exits, fast is either at the end or one node before end, slow is updated to be at the middle or the second middle node
  return slow
}




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

// review:
const middleNode2 = (firstNode) => {
  let [slow, fast] = [firstNode, firstNode];
  while (fast && fast.next) {
    [slow, fast] = [slow.next, fast.next.next];
  }
  return slow;
};