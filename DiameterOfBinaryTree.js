/**
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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    // Helper function to calculate the depth of the tree
    function depth(node) {
        if (node === null) return 0;
        
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        
        // Update the maxDiameter if the sum of left and right depths at this node is greater than the current max
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
        // Return the depth of the current node
        return Math.max(leftDepth, rightDepth) + 1;
    }

    // Start from the root
    depth(root);

    // Return the maximum diameter found
    return maxDiameter;
};

// Build the tree: 
//        1
//       / \
//      2   3
//     / \     
//    4   5

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Test the function
console.log(diameterOfBinaryTree(root)); // Expected output: 3
