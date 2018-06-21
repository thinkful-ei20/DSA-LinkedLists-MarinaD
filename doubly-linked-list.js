'use strict';

class _Node {
  constructor() {
    this.value = null;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head, null);
  }

  insertLast(item) {
    if(!this.head){
      this.insertFirst(item);
    }
    else {
      let current = this.head;
      while(current) {
        current = current.next;
      }
      current.next = new _Node(item, null, current);
    }
  }

  insertBefore() {
  }

  insertAfter() {

  }

  insertAt() {
  }
  
  remove(item) {
    if(!this.head) {
      return null;
    }
    else if (this.head.value === item) {
      this.head = this.head.next;
    }
    else {
      let currNode = this.head;
      while((currNode !== null) && (currNode.value !== item)) {
        currNode = currNode.next;
      }
      if(currNode === null) {
        console.log('Item not found!');
        return;
      }
      currNode.previous.next = currNode.next;
    }
  }

  find() {
  }
}
