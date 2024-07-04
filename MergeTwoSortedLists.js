/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let current = dummy;

    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next; 
        } else {
            current.next = list2;
            list2 = list2.next; 
        }
        console.log("--Before");
        printDummy(dummy);
        console.log("--After");
        current = current.next;
        printDummy(dummy);
    }
    if (list1) {
        current.next = list1;
    } else if (list2) {
        current.next = list2;
    }
    console.log("--Final");
    printDummy(dummy);
    return dummy.next;
};

function printDummy(dummy) {
    let temp = dummy.next;
    let arr = [];
    while (temp !== null) {
        arr.push(temp.val);
        temp = temp.next;
    }
    console.log(arr.join(' -> '));
}


// Helper function to convert an array to a linked list
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    arr.forEach(val => {
        current.next = new ListNode(val);
        current = current.next;
    });
    return dummy.next;
}

// Helper function to convert a linked list to an array
function listToArray(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);

const a = listToArray(mergedList).join(", ");
console.log(a);