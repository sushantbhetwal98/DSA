// custom array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //   push method
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return true;
  }

  //   get method
  get(index) {
    return this.data[index];
  }

  //   pop method
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //   shift method execution
  shift() {
    const firstItem = this.data[0];
    // reindexing
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  //   delete by index method
  delete(index) {
    const itemtoDelete = this.data[index];
    for (let i = index + 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length - 1];
    this.length--;
    return itemtoDelete;
  }
}

const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("grapes");
myNewArray.push("mango");
myNewArray.push("pineApple");
// console.log(myNewArray.get(0));
// console.log(myNewArray.pop());
// console.log(myNewArray.shift());

console.log(myNewArray);
console.log(myNewArray.delete(2));
console.log(myNewArray);
