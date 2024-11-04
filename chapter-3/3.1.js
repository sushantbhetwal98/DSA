// Node
class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}


// linked list
class LinkedList{
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
       let newNode = new Node(value);
       if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
       }
        /* as the node constructor has the lastelement in tail
        so the tail is appended and later changed to ndeNode */
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
    }

    pop() {
        if(!this.head) {
            return undefined;
        }
      let temp = this.head;
      let prev = this.head;
      while(temp.next) {
        prev = temp;
        temp = prev.next;
      }

      this.tail = prev;
      this.tail.next = null;
      this.length--;

      if(this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return temp;
    }

    // unshift for adding new item in the begining of the linked list
    unshift(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
       }

      newNode.next = this.head;
      this.head = newNode;
      this.length++;

      return this;
    }

    // shift for removing the first element of the list
    shift() {
      if(!this.head) {
        return undefined;
      }
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      
      if(this.length === 0) {
        this.tail = null;
      }
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
      if(index > this.length) {
        return null;
      }
      let counter = 0;
      let temp = this.head;
      while(temp) {
        if(counter === index) {
          return temp;
        }

        counter ++;
        temp = temp.next;
      }
    }

    // set to update the value of specific index
    set(index, value) {
      let temp = this.get(index);
      if(temp) {
        temp.head = value;
        return true;
      }
      return false
    }

    // insert method to insert in the given index
    insert(index, value) {
      if(index === 0) {
        return this.unshift(value)
      }
      if(index === this.length) {
        return this.push(value);
      }
     if(index < 0 || index > length) {
      return undefined;
     }

    const newNode = new Node(value);
    const temp = this.get(index-1);
     
     newNode.next = temp.next;
     temp.next = newNode;
     this.length++;
     return true;
    }

    // size to get the current count of element in the linked list
    size() {
      const count = 0;
      while(this.head) {
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

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
// myLinkedList.pop();
// myLinkedList.pop();
// console.log(myLinkedList);
// myLinkedList.unshift(0);
// console.log(myLinkedList);
// myLinkedList.shift();
// console.log(myLinkedList);
// console.log("first element",myLinkedList.getFirst())
// console.log("last element",myLinkedList.getLast())
console.log(myLinkedList.get(2));