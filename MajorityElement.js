/**
 * et's go through the steps to solve this problem using Boyer-Moore Voting Algorithm, which operates in O(n) time and O(1) space.

Plan
Initialize a candidate element and a counter.
Iterate through the array:
If the counter is 0, set the current element as the candidate.
If the current element is the same as the candidate, increment the counter.
Otherwise, decrement the counter.
After completing the iteration, the candidate is the majority element.
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // const majorityObject = {};
    // let majorityCount = 0;
    // let majority = 0
    // for (let n of nums) {
    //     majorityObject[n] = (majorityObject[n] || 0) + 1;
    //     if(majorityObject[n] > majorityCount) {
    //         majority = n;
    //         majorityCount = majorityObject[n];
    //     }
    // }
    // return majority;

    let majorityCount = 0;
    let majority = null
    for (let n of nums) {
        if(majorityCount === 0) {
            majority = n
        }
        majorityCount += (majority === n) ? 1 : -1
    }
    return majority;
};

// Example usage:
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));  // Output: 2