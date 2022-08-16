/**
 * @author Jeff Dorsainvil
 *
 * @brief This is a basic implementation of the List Data Structure
 *
 * @description In computer science, a list or sequence is an abstract
 * data type that represents a finite number of ordered values, where
 * the same value may occur more than once. An instance of a list is a
 * computer representation of the mathematical concept of a tuple or
 * finite sequence; the (potentially) infinite analog of a list is a
 * stream.[1]: §3.5  Lists are a basic example of containers, as they
 * contain other values.
 *
 * @see [List](https://en.wikipedia.org/wiki/List_(abstract_data_type)
 */

class List {
  constructor() {
    this.store = []; // data store
    this.size = 0; // data store size
  }

  // This method appends data to the list, pass it some data and it will be attached at the end of the list
  append(value) {
    this.store[this.size++] = value;
  }

  // This method removes something from the list
  remove(value) {
    if (!value) return;

    const index = this.store.indexOf(value);

    if (index >= 0) {
      this.store.splice(index, 1);
      this.size--;
    }
  }

  // returns the stored data
  get data() {
    return this.store;
  }

  // this method clears the data store
  clear() {
    this.store = [];
    this.size = 0;
  }

  // This predicate checks whether the list contains a certain value or not
  contains(value) {
    for (let i = 0; i < this.size; i++) {
      if (this.store[i] === value) return true;
    }
    return false;
  }
}

const list = new List();
list.append(2);
list.append(3);
list.append(5);
list.append(7);

console.log(list.contains(3)); // true
console.log(list.data); // [ 2, 3, 5, 7 ]
