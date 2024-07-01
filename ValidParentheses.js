/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matchingPairs = {
        ")":"(",
        "}":"{",
        "]":"[",
    }
    const result = [];
    for(let char of s) {
        if(Object.values(matchingPairs).includes(char)) {
            result.push(char);
        } else if(Object.keys(matchingPairs).includes(char)) {
            if (result.length === 0 || matchingPairs[char] !== result.pop()) {
                return false;
            }
        } else {
            return false;
        }
    }

    return result.length === 0;
};

console.log("Output", isValid("()[]{}"));