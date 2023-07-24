class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 */
export function ReverseList(head: ListNode) {
  // write code here

  let curNode = head;

  let pre: ListNode | null = null,
    next;

  while (curNode !== null) {
    next = curNode.next;
    curNode.next = pre;
    pre = curNode;
    curNode = next;
  }

  return pre;
}
