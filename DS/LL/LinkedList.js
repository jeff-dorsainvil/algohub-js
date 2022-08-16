/**
 * @author Jeff Dorsainvil
 *
 * @brief A simple implementation of Singly Linked List
 *
 * @definition a linked list is a linear collection of data elements
 * whose order is not given by their physical placement in memory.
 *
 * @see [Linked_list](https://en.wikipedia.org/wiki/Linked_list)
 */

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Class declaration
class LL {
  constructor() {
    this.head = new ListNode("head"); // head node
    this.size = 0; // List size
  }

  // Inserts element at the end of the list
  insert(dataToBeInserted) {
    var currentNode = this.head;
    var node = new ListNode(dataToBeInserted);

    // while next is not null
    while (currentNode.next) currentNode = currentNode.next;

    currentNode.next = node;
    this.size++;
  }

  // Removes an item at a particular index
  removeAt(index) {
    let sub = 0;

    if (index >= 0 && index <= this.size) {
      let currentNode = this.head;
      let prevNode;

      if (index === 0) return (this.head = currentNode.next);
      while (sub < index) {
        sub++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next;
    }
    this.size--;
  }

  // Displays the content of the list
  display() {
    var currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

// Creating an instance of LL
const cities = new LL();

cities.insert("New York");
cities.insert("New Jersey");
cities.insert("Florida");
cities.removeAt(1);

cities.display(); //New Jersey, Florida
console.log(cities.size); // 2
