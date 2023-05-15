/*
The goal is to use two stacks that follows FILO to process a queue FIFO
*/
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // add an element to queue
  enqueue = (element) => {
    // add element to end of queue, simply .push() to stack1
    this.stack1.push(element);
  };

  // take first element of queue out
  dequeue = () => {
    // can't .shift() an array, because that would not be a stack, can only use pop and append to stack1 and stack2
    // if stack2 has previously added elements, pop those last (which is the first in queue), if it's empty, one by one, pop stack1 and append to stack2 to reverse the order of elements in stack1(which has the same order as queue) and then pop stack2
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  };

  // returns the first element in queue
  peek = () => {
    // stack only lets us access the last element, so we can't use index [0] to access the first element of an array
    // similar to dequeue, if stack2 has elements, return the last one, if not, pop all elements from stack1 and append them to stack2, then return the last element in stack2
    if (!this.stack2.length) {
      while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2[this.stack2.length - 1];
  };

  isEmpty = () => {
    return !this.stack1.length && !this.stack2.length;
  };
}

  /**
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */
}

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//   this.stack1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//   // if stack2 has previously added elements, pop those first, if it's empty, pop stack1 and append to stack2 and then pop stack2
//   if (!this.stack2.length) {
//     while (this.stack1.length) {
//       this.stack2.push(this.stack1.pop());
//     }
//   }
//   return this.stack2.pop();
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//   if (this.stack2.length) {
//     return this.stack2[this.stack2.length - 1];
//   }
//   return this.stack1[0];
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//   return !this.stack1.length && !this.stack2.length;
// };

// /**
//  * Your MyQueue object will be instantiated and called as such:
//  * var obj = new MyQueue()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.peek()
//  * var param_4 = obj.empty()
//  */
