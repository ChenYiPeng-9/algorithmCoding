class MinStack {
  private stackArr: number[] = [];
  private minArr: number[] = [Infinity];

  push = (val: number) => {
    this.stackArr.push(val);
    this.minArr.push(Math.min(val, this.minArr[this.minArr.length - 1]));
  };

  pop = () => {
    this.stackArr.pop();
    this.minArr.pop();
  };

  top = () => {
    return this.stackArr[this.stackArr.length - 1];
  };

  min = () => {
    return this.minArr[this.minArr.length - 1];
  };
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.min());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.min());
