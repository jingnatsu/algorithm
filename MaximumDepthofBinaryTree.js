/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along 
the longest path from the root node down to the farthest leaf node.
Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:
Input: root = [1,null,2]
Output: 2
 * Definition for a binary tree node.
 * */
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
        // Base case: if the tree is empty, the depth is 0
    if (root === null) return 0;
    
    // Recursively find the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // The depth of the tree is the max depth of left or right subtrees + 1
    return Math.max(leftDepth, rightDepth) + 1;
};