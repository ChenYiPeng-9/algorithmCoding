class CQueue {
  private stackA: number[];
  private stackB: number[];
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  appendTail(value: number): void {
    this.stackA.push(value);
  }

  deleteHead(): number {
    if (this.stackB.length) {
      return this.stackB.pop()!;
    } else {
      while (this.stackA.length) {
        this.stackB.push(this.stackA.pop()!);
      }
      if (!this.stackB.length) {
        return -1;
      } else {
        return this.stackB.pop()!;
      }
    }
  }
}
