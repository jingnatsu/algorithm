
var MyQueue = function() {
    this.input = [];
    this.output = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.output.length === 0) {
        while (this.input.length > 0) {
            this.output.push(this.input.pop())
        }
    }
    return this.output.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.output.length === 0) {
        while (this.input.length > 0) {
            this.output.push(this.input.pop())
        }
    }
    return this.output[this.output.length -1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input.length===0 && this.output.length===0
};

// Example usage:
const queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.pop());  // Output: 1
console.log(queue.peek());     // Output: 2
console.log(queue.empty());  // Output: false
queue.pop();
queue.pop();
console.log(queue.empty());  // Output: true