/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

https://leetcode.com/problems/add-two-numbers/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 1 -> 3 -> 5 //531
// 2 -> 4 //42
// 3 -> 7 -> 5 //573

const addTwoNumbers = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  let extra = 0;
  let newList = new ListNode(null, null);
  let [currentNode, currentNode1, currentNode2] = [newList, l1, l2];
  
  while (currentNode1 || currentNode2) {
    currentNode.next = new ListNode(null, null);
    currentNode = currentNode.next
    let val1 = currentNode1 ? currentNode1.val : 0;
    let val2 = currentNode2 ? currentNode2.val : 0;
    let sum = val1 + val2 + extra;
    extra = sum >= 10 ? 1 : 0;
    currentNode.val = sum % 10;
    currentNode1 = currentNode1 ? currentNode1.next : null;
    currentNode2 = currentNode2 ? currentNode2.next : null;
  }
  // exited while loop both lists reached the end
  if (extra) {
    currentNode.next = new ListNode(1, null);
  }
  return newList.next
}


// const addTwoNumbers = (l1, l2) => {
//   if (!l1) return l2;
//   if (!l2) return l1;

//   let currentNode1 = l1;
//   let currentNode2 = l2;
//   let newList = l1;
//   let currentNode = newList;
//   let endList;
//   let surplus = 0
//   while (currentNode1 && currentNode2) {
//     let sum = currentNode1.val + currentNode2.val + surplus;
//     if (sum >= 10) {
//       currentNode.val = sum - 10;
//       surplus = 1;
//     } else {
//       currentNode.val = sum;
//       surplus = 0
//     }
//     if (!currentNode.next) {
//       endList = currentNode;
//     }
//     currentNode = currentNode.next;
//     currentNode1 = currentNode1.next;
//     currentNode2 = currentNode2.next;
//   }
//   if (endList) {
//     endList.next = currentNode1 ? currentNode1 : currentNode2;
//     currentNode = endList.next;
//   } else {
//     currentNode = currentNode1 ? currentNode1 : currentNode2;
//   }
  

//   while (currentNode) {
//     let sum = surplus + currentNode.val;
//     if (sum >= 10) {
//       currentNode.val = sum - 10;
//       surplus = 1;
//     } else {
//       currentNode.val = sum;
//       surplus = 0;
//     }
//     if (!currentNode.next) {
//       endList = currentNode;
//     }
//     currentNode = currentNode.next;
//   }
//   console.log(endList, currentNode);
//   if (surplus === 1) {
//     endList.next = new ListNode(1, null);
//     console.log(endList.next)
//   }
//   return newList
// }