/*
Given the root of a binary tree, invert the tree, and return its root.
https://leetcode.com/problems/invert-binary-tree/
*/


const invertTree = (root) => {
  if (!root) return null
  if (!root.left && !root.right) return root
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
};



// const invertTree = (root) => {
//   if (!root) return null;
//   if (!root.left && !root.right) return root;
//   let invertedRight= invertTree(root.right);
//   let invertedLeft = invertTree(root.left);
//   root.left = invertedRight;
//   root.right = invertedLeft;
//   return root
// };