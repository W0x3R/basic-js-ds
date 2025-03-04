const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    return this.begin;
  }
  enqueue(num) {
    const node = new ListNode(num);
    if (this.begin) {
      this.end.next = node;
      this.end = node;
    } else {
      this.begin = node;
      this.end = node;
    }
  }
  dequeue() {
    const firstNode = this.begin;
    this.begin = this.begin.next;
    return firstNode.value;
  }
}
module.exports = {
  Queue,
};
