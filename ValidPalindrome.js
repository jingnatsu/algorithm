/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let normalizedStr = "";
    for(let i = 0; i < s.length; i++) {
        const lowerChar = s[i].toLowerCase();
        if((lowerChar >= 'a' && lowerChar <='s') || lowerChar >= '0' && lowerChar <='9') {
            normalizedStr += lowerChar;
        }
    }

    let left = 0;
    let right = normalizedStr.length - 1;
    while(left < right) {
        if(normalizedStr[left] !== normalizedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Unit tests
function runTests() {
    const testCases = [
        { input: "A man, a plan, a canal: Panama", expected: true },
        { input: "race a car", expected: false },
        { input: " ", expected: true },
        { input: "0P", expected: false },
        { input: "Able was I ere I saw Elba", expected: true },
        { input: "Madam, in Eden, I'm Adam", expected: true },
        { input: "No lemon, no melon", expected: true }
    ];

    testCases.forEach((testCase, index) => {
        const result = isPalindrome(testCase.input);
        console.log(`Test case ${index + 1}: ${result === testCase.expected ? 'Passed' : 'Failed'}`);
    });
}

runTests();