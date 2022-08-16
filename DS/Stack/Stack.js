/**
 * @author Jeff Dorsainvil
 * @brief This is an implementation of the stack data structure
 * @description A stack is a linear data structure that follows the
 * principle of Last In First Out (LIFO). This means the last element
 * inserted inside the stack is removed first.
 *
 * @see [Stack](https://www.programiz.com/dsa/stack)
 */

// Class declaration
class Stack {
  constructor() {
    this.stack = []; // data store
    this.size = 0; // stack size
  }

  // Adding values to the stack
  insert(...values) {
    this.size += values.length;
    return this.stack.push(...values);
  }

  // Getting the latest added value of the stack without removing it.
  peek() {
    return this.stack[this.size - 1];
  }

  // Returns and removes the top element of the stack
  pop() {
    if (this.size == 0) throw new Error("Stack underflow!");
    this.size -= 1;
    return this.stack.pop();
  }

  // Checking if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // checking if something is an instance of Stack
  isStack(s) {
    return s instanceof Stack;
  }
}

// Creating a new Stack instance
const myStack = new Stack();

console.log(myStack.isStack(myStack)); //True
console.log(myStack.insert(2, 3, 5)); // 3 (new stack length)
console.log(myStack.peek()); // 5
console.log(myStack.size); // 3
myStack.pop();
console.log(myStack.size); // 2
