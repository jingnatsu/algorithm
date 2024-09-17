
 function TreeNode(val) {
        this.left = this.right = null;
        this.val = val;
  }

/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while (root != null) {
      if (p.val > root.val && q.val > root.val) {
        root = root.right;
      } else if (p.val < root.val && q.val < root.val) {
        root = root.left;
      } else {
        return root;
      }
    }
    return null;
};

// Constructing the BST
let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

// Nodes to find the LCA for
let p = root.left;  // Node with value 2
let q = root.left.right;  // Node with value 4

// Solution instance
const lca = lowestCommonAncestor(root, p, q);

console.log("Lowest Common Ancestor:", lca.val);  // Output: 2