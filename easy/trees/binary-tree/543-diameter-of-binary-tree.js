/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.



Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100

https://leetcode.com/problems/diameter-of-binary-tree/
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
 * @return {number}
 */

// Function to calculate the height of a binary tree
function getHeight(node) {
  if (!node || (!node.left && !node.right)) return 0;

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);
  
  return Math.max(leftHeight, rightHeight) + 1;
};

// Function to calculate the diameter of a binary tree
function diameterOfBinaryTree(node) {
  if (!node || (!node.left && !node.right)) return 0;
  
  const leftHeight = node.left ? getHeight(node.left) + 1: 0;
  const rightHeight = node.right ? getHeight(node.right) + 1 : 0;

  
  const leftDiameter = diameterOfBinaryTree(node.left);
  const rightDiameter = diameterOfBinaryTree(node.right);
  
  // console.log(`currentNode: ${node.val}, leftHeight: ${leftHeight}, rightHeight: ${rightHeight}, leftDiameter: ${leftDiameter}, rightDiameter: ${rightDiameter}`)
  
  return Math.max(leftHeight + rightHeight, leftDiameter, rightDiameter);
};