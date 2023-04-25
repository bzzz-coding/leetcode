/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

https://leetcode.com/problems/merge-two-sorted-lists/

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1
  } 
  list2.next = mergeTwoLists(list1, list2.next);
  return list2
}


// var mergeTwoLists = function(list1, list2) {
//   if (!list1) return list2
//   if (!list2) return list1
//   let joinedList, currentJoinedList;
//   let currentList1 = list1; 
//   let currentList2 = list2;


//   if (list1.val <= list2.val) {
//     joinedList = list1;
//     currentList1 = list1.next;
//   } else {
//     joinedList = list2;
//     currentList2 = list2.next
//   }
//   currentJoinedList = joinedList
//   console.log(`joinedList.val: ${joinedList.val}`)
//   while (currentList1 && currentList2) {
//     if (currentList1.val <= currentList2.val) {
//       currentJoinedList.next = currentList1;
//       currentList1 = currentList1.next;
//       // currentJoinedList = currentJoinedList.next;
//     } else {
//       currentJoinedList.next = currentList2;
//       currentList2 = currentList2.next;
//       // currentJoinedList = currentJoinedList.next;
//     }
//     currentJoinedList = currentJoinedList.next;
//   }
//   currentJoinedList.next = currentList1 ? currentList1 : currentList2;
//   return joinedList
// }

