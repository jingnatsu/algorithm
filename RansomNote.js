/**
 * Given two strings ransomNote and magazine, 
 * return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // if(magazine.length < ransomNote.length) {
    //     return false;
    // }
    // for(const char of magazine) {
    //     ransomNote = ransomNote.replace(char, "");
    // }
    // if (!ransomNote) return true;
    // return false
    // Create a map to track character frequency in the magazine
    const magazineLetters = {};

    // Populate the frequency map with characters from the magazine
    for (let char of magazine) {
        if (magazineLetters[char]) {
            magazineLetters[char]++;
        } else {
            magazineLetters[char] = 1;
        }
    }

    // Iterate through the ransom note to check if it can be constructed
    for (let char of ransomNote) {
        if (!magazineLetters[char] || magazineLetters[char] === 0) {
            return false; // If the character is not in the magazine or out of stock
        }
        magazineLetters[char]--; // Decrease the count for the used character
    }

    return true; // If all characters in the ransom note can be constructed
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true