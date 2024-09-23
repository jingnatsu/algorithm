/**
 * Definition for singly-linked list.
 * 
 * */
 function ListNode(val, next = null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current != null) {
        next = current.next;  // Store the next node
        current.next = prev;   // Reverse the link
        prev = current;        // Move prev to current
        current = next;        // Move current to next
    }
    return prev; // New head of the reversed list
};

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log("Original List:");
printList(head);

let reversedHead = reverseList(head);

console.log("Reversed List:");
printList(reversedHead);

function printList(node) {
    while (node !== null) {
        process.stdout.write(node.value + " -> ");
        node = node.next;
    }
    console.log("null");
}

//https://leetcode.com/problems/reverse-linked-list/solutions/5612752/step-by-step-explained-with-images-easiest-to-understand-java-c-python-javascript-go-codes/