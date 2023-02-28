# leetcode

## Linked Lists

### Finding the middle of a linked list
- Concept: Nodes do not have an index, but a `next` property. 
- Hint: Loop through all the nodes at two speeds `.next` and `.next.next`. By the time the second speed reaches the end, the first will be at the middle. Return what node the first speed is currently at.
- Solution:
  - Starting from the head node, declare two tracks: `slow` and `fast`, `let slow = head;` and `let fast = head;`
    - While fast and fast.next (so that linked lists that have an even number of nodes, the while loop will exit after fast becomes null, and slow reaches the second middle node to be returned):
      - `slow` moves at 1x speed, to `slow.next`
      - `fast` moves at 2x speed, to `fast.next.next` 
  - When `fast` reaches the end of the linked list (`fast.next === null`), `slow` is at the middle of the list
