/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charCount = {};
    
    // Count frequency of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let length = 0;
    let oddCountFound = false;

    // Calculate the length of the longest palindrome
    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            length += count; // Use all characters if even count
        } else {
            length += count - 1; // Use the largest even part of the odd count
            oddCountFound = true; // Mark that an odd count exists
        }
    }

    // Add one more character in the center if there was any odd count
    if (oddCountFound) {
        length += 1;
    }

    return length;
};


// Example usage
const result = longestPalindrome("abccccdd");
console.log(result); // Output: 7
