'use strict';

class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(item){
    if (!this.head){
      const brandNewNode = new _Node(item, null, null);
      this.head = brandNewNode;
      this.tail = brandNewNode;
      this.length++;
      return;
    }
    
    const newNode = new _Node (item, this.head, null);
    this.head.previous = newNode;
    this.head = newNode; 
    this.length++;
  }

  insertLast(item) {
    if(!this.head){
      this.insertFirst(item);
    }
    else {
      let current = this.head;
      while(current.next !== null) {
        current = current.next;
      }
      const newNode = new _Node(item, null, current);
      current.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  insertBefore(newItem, oldItem) {
    if (!this.head){
      this.insertFirst(newItem);
    }
    else {
      if(this.head.value === oldItem){
        this.insertFirst(newItem);
      }
      else {
        let currNode = this.head;
        while ((currNode.value !== oldItem) && (currNode !== null)){
          currNode = currNode.next;
        }
        let newNode = new _Node(newItem, currNode, currNode.previous);
        currNode.previous.next = newNode;
        currNode.previous = newNode;
      }
    }
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

  find(item) {
    if (!this.head){
      return null;
    }

    let currNode = this.head;
    while (currNode.value !== item){
      if(currNode.next === null){
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}


function main () {
  const list = new DoublyLinkedList;
  list.insertFirst('D');
  list.insertFirst('C');
  list.insertFirst('B');
  list.insertFirst('A');
  list.insertLast('E');
  console.log(list);
}

main();