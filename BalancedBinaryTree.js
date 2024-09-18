/**Given a binary tree, determine if it is 
height-balanced
Input: root = [3,9,20,null,null,15,7]
Output: true
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Input: root = []
Output: true
*/


 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;
    if (checkHeight(root) === -1) return false;
    return true
    
};

const checkHeight = (node) => {
    if(node === null) return 0;
    // Recursively check the height of the left subtree
    const leftHeight = checkHeight(node.left);
    // Recursively check the height of the right subtree
    const rightHeight = checkHeight(node.right);
    if (leftHeight === -1 || rightHeight === -1) {
        return -1;
    }

    // If the difference in heights is more than 1, the tree is unbalanced
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    // Return the height of the tree
    return Math.max(leftHeight, rightHeight) + 1;

}

// Example usage:

// Creating a balanced binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log("Is the binary tree balanced?", isBalanced(root)); // Output: true

// Creating an unbalanced binary tree
root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(4);

console.log("Is the binary tree balanced?", isBalanced(root)); // Output: false