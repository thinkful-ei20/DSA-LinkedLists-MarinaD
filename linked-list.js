'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(newItem, oldItem) {
    if (!this.head) {
      this.insertFirst(newItem);
    }
    else {
      if (this.head.value === oldItem) {
        this.insertFirst(newItem);
      }
      else {
        let currNode = this.head;
        let prevNode = this.head;
        while ((currNode.value !== oldItem) && (currNode !== null)) {
          prevNode = currNode;
          currNode = currNode.next;
        }
        prevNode.next = new _Node(newItem, currNode);
      }
    }
  }

  insertAfter(newItem, oldItem) {
    if (!this.head) {
      this.insertFirst(newItem);
    }
    else {
      if (this.head.next === null) {
        this.head.next = new _Node(newItem, null);
      }
      else {
        let currNode = this.head;
        let nextNode = this.head.next;
        while ((currNode.value !== oldItem) && (currNode.next !== null)) {
          currNode = currNode.next;
          nextNode = currNode.next;
        }
        currNode.next = new _Node(newItem, nextNode);
      }
    }
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let counter = 0;
      while (currNode.next !== null) {
        if (counter === position - 1) {
          currNode.next = new _Node(item, currNode.next);
          return;
        } else {
          counter++;
          currNode = currNode.next;
        }
      }
      currNode.next = new _Node(item, null);
      return;
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function display(SLL) {
  let current = SLL.head;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function size(SLL) {
  let current = SLL.head;

  let counter = 0;
  while (current) {
    counter++;
    current = current.next;
  }
  return counter;
}

function isEmpty(SLL) {
  return (SLL.head === null);
}

function findPrevious(SLL, item) {
  if(!SLL.head) {
    return null;
  }

  let current = SLL.head;
  let previous = SLL.head;
  while(current) {

    if(current.value === item) {
      return previous;
    }
    previous = current;
    current = current.next;
  }
  
  return null;
}

function findLast(SLL) {
  if (!SLL.head){
    return null;
  }

  let current = SLL.head;
  while(current.next !== null){
    current = current.next;
  }
  return current;
}

function main() {

  const SLL = new LinkedList();

  console.log(isEmpty(SLL).toString());

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');

  SLL.insertLast('Tauhida');

  SLL.remove('squirrel');

  SLL.insertBefore('Athena', 'Starbuck');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);

  SLL.remove('Tauhida');


  display(SLL);
  console.log(size(SLL));
  console.log(isEmpty(SLL).toString());
  console.log(findPrevious(SLL, 'Starbuck').value);
  console.log(findLast(SLL).value);

  // console.log(JSON.stringify(SLL));
}

main();
