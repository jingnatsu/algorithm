/**
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to introduce a cycle in the linked list
function createCycle(head, pos) {
    if (pos === -1) return head; // no cycle
    let cycleNode = head;
    let tail = head;
    let index = 0;

    while (tail.next !== null) {
        if (index === pos) {
            cycleNode = tail;
        }
        tail = tail.next;
        index++;
    }
    tail.next = cycleNode; // create the cycle
    return head;
}

// Test 1: Linked list without a cycle
let list1 = createLinkedList([1, 2, 3, 4, 5]);
console.log(hasCycle(list1)); // Expected output: false

// Test 2: Linked list with a cycle (pos = 1, cycle at node 2)
let list2 = createLinkedList([1, 2, 3, 4, 5]);
list2 = createCycle(list2, 1);
console.log(hasCycle(list2)); // Expected output: true