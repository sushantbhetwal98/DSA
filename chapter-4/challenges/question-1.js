/* find the minimun of the number in the stack */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  min() {
    if (this.length === 0) {
      return undefined;
    }
    let current = this.first;
    let minValue = current.value;

    while (current.next) {
      current = current.next;
      if (current.value < minValue) {
        minValue = current.value;
      }
    }

    return minValue;
  }
}

let myStack = new Stack(10);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
console.log(myStack.min());
