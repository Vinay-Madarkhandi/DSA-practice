class Stack {
  constructor() {
    this.stack = [];
  }
  pushu(element) {
    return this.stack.push(element);
  }
  popu() {
    if (this.size() === 0) {
      return "this stack is empty!";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.size() === 0) {
      return "sorry u cant peek no element found!";
    }
    return this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    return this.stack.length;
  }
}
