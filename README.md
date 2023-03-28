# leetcode

## Linked Lists

### Finding the middle of a linked list
- Concept: Nodes do not have an index, but a `next` property. 
- Hint: Loop through all the nodes at two speeds `.next` and `.next.next`. By the time the second speed reaches the end, the first will be at the middle. Return what node the first speed is currently at.
- Solution: easy/linked-list/find-middle-node-in-linked-list.js
  - Starting from the head node, declare two tracks: `slow` and `fast`, `let slow = head;` and `let fast = head;`
    - While fast and fast.next (so that linked lists that have an even number of nodes, the while loop will exit after fast becomes null, and slow reaches the second middle node to be returned):
      - `slow` moves at 1x speed, to `slow.next`
      - `fast` moves at 2x speed, to `fast.next.next` 
  - When `fast` reaches the end of the linked list (`fast.next === null`), `slow` is at the middle of the list

## Reversing a singly linked list
- Concept: Each node in a singly linked list has a `next` property that points to the next node, with the exception of the tail node, which points to `null`
- Hint: Loop through all the nodes, and reassign the `next` to the previous node, with the exception of the `head` which should point to `null`
- Solution: easy/linked-list/reverse-linked-list.js
  - Assign `null` to a variable `previousNode`: `let previousNode = null;`
  - Assign `head` to a variable `currentNode`: `let currentNode = head;`
  - While `currentNode` is not `null`
    - store it's `next` node, 
    - reassign it's `next` to `previousNode`, 
    - now that the swapping is done, shift the `currentNode` and `previousNode` forward to it's original `next` and the node itself
  - When the while loop exits, `currentNode` is `null`, `previousNode` used to be the `tail` of the list, now is the `head`, return `previousNode`


## Trees

# Get depth of binary tree
- Concept: the value of each node is not important, the depth of a tree node is 1 + the depth of its left or right child tree node, whichever is greater--think about this recursively
- Hint: make two recursively function calls, one for the left branch, one for the right
- Solution: 
  - catch case: if node === null, return 0
  - depth of tree going down the left branch = 1 + depth of left tree; depth of tree going down the left branch = 1 + depth of left tree; 
  - get the Math.max(depth of tree going down the left branch, depth of tree going down the right branch)
