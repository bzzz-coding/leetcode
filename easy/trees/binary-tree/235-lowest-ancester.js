/*

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// at least two nodes
// all values are unique

const lowestCommonAncestor = (root, p, q) => {
  if (root.val === p.val || root.val === q.val) return root;
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
};
