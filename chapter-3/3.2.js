class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.head;
    if (length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    length--;
    return temp;
  }

  // get first element
  getFirst() {
    return this.head.head;
  }

  // get last element
  getLast() {
    return this.tail.head;
  }

  // get element by index
  get(index) {
    if (index > this.length) {
      return null;
    }
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }

      counter++;
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    } else if (index === length) {
      return this.push(value);
    } else if (index < 0 || index > length) {
      return undefined;
    } else {
      const newNode = new Node(value);
      const temp = this.get(index - 1);
      newNode.next = temp.next;
      newNode.prev = temp;
      temp.next = newNode;
    }
    this.length++;
    return true;
  }
  // size to get the current count of element in the linked list
  size() {
    const count = 0;
    while (this.head) {
      count++;
    }
    return count;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
console.log(myDoublyLinkedList);
