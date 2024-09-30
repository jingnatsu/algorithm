/**
 * Given two binary strings a and b, return their sum as a binary string.
Example 1:
Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

Pseudocode:
Initialize variables:

Use carry to track any overflow from the sum of two bits (either 0 or 1).
Create an empty array result to store the bits of the resulting binary number.
Traverse both binary strings from the end to the start (right to left):

Use two pointers: i for the first string and j for the second string.
For each position, add the corresponding bits from both strings and the carry from the previous addition.
Add the bits:

Convert the characters '0' and '1' to integers and sum them along with the carry.
Compute the resulting bit to store in the result as sum % 2.
Update the carry as Math.floor(sum / 2) (which will be either 0 or 1).
Handle remaining carry:

If there’s a carry left after processing all bits, append '1' to the result.
Return the result:

Since the result is constructed from right to left, reverse it and join the bits into a string.
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = []; 

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry; // Start with the carry
        
        if (i >= 0) {
            sum += parseInt(a[i]); // Add bit from a if available
            i--; // Move left in string a
        }

        if (j >= 0) {
            sum += parseInt(b[j]); // Add bit from b if available
            j--; // Move left in string b
        }
        // Append the current bit (sum % 2) to the result
        result.push(sum % 2);

        // Update carry (sum / 2)
        carry = Math.floor(sum / 2);
    }

    // The result array is in reverse order, so we reverse and join it
    return result.reverse().join("");
};


// Example usage
console.log(addBinary("1010", "1011"));  // Output: "10101"