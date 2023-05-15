/*
Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Constraints:
The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104

https://leetcode.com/problems/balanced-binary-tree/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 
// if !root, return true
// const isBalanced = function(root) {
//   if (!root) return true;
//   if (!root.left && !root.right) return true;
//   if (((root.left && (root.left.left || root.left.right)) && !root.right) || ((root.right && (root.right.left || root.right.right)) && !root.left)) return false;
//   return isBalanced(root.left) && isBalanced(root.right);
// };

const isBalanced = function(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  function getDepth(root) {
    if (!root) return 0;
    return Math.max(getDepth(root.left) + getDepth(root.right)) + 1;
  }
 
  if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;
  if (isBalanced(root.left) && isBalanced(root.right)) return true;
}