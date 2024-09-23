/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<= 2) {
        return n
    }
    let prev1 = 1, prev2 = 2;
    for(let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    return prev2
};

// Example usage:
const n = 5;
console.log(climbStairs(n)); // Output: 8