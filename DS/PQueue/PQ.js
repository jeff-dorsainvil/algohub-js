/**
 * @author Jeff Dorsainvil
 * @brief This is a simple implementation of a Priority Queue.
 *
 * @definition a priority queue is an abstract data-type similar to a
 * regular queue or stack data structure in which each element
 * additionally has a priority associated with it. In a priority
 * queue, an element with high priority is served before an element
 * with low priority.
 *
 * @see [Priority Queue](https://en.wikipedia.org/wiki/Priority_queue)
 **/

// Class definition
class PQueue {
  constructor() {
    this.data = [];
    this.size = 0;
    this.currentValue = null;
  }

  // Adding a new item to the queue
  addValue(value) {
    this.data[this.size++] = value;
  }

  // Getting the item with the highest priority
  getValue() {
    if (this.size) {
      const currentPriority = this.data[0].priority;
      var maxValue = this.data[0];

      for (let index = 0; index < this.size; index++) {
        if (this.data[index].priority > currentPriority)
          if (this.data[index].priority > maxValue.priority)
            maxValue = this.data[index];
      }

      this.currentValue = maxValue;

      return this.currentValue || this.data[0];
    }
    return null;
  }

  // Clearing the queue
  clearQueue() {
    this.data = [];
    this.size = 0;
  }
}

/** To test the Queue, we create a class called Todo which will contain
 * a title and a priority property, then we can add a few Todos in the Queue
 *  and it will return the element with the highest priority */
class Todo {
  constructor(title, priority) {
    this.title = title;
    this.priority = priority;
  }
}

const todo = new Todo("dish", 33);
const todo2 = new Todo("football", 53);
const todo3 = new Todo("eat", 100);
const todo5 = new Todo("BasketBall", 110);
const todo4 = new Todo("sleep", 22);

const myQ = new PQueue();
myQ.addValue(todo);
myQ.addValue(todo2);
myQ.addValue(todo5);
myQ.addValue(todo3);
myQ.addValue(todo4);

console.log(myQ.getValue());
