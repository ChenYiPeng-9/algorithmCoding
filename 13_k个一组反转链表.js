function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
function reverseKGroup(head, k) {
  // write code here

  let dummyNodeList = new ListNode();
  let pre = dummyNodeList;
  dummyNodeList.next = head;

  while (head) {
    let tail = pre;

    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        return dummyNodeList.next;
      }
    }

    let next = tail.next;
    [head, tail] = reverseBetween(head, tail);
    pre.next = head;
    tail.next = next;

    pre = tail;
    head = tail.next;
  }

  return dummyNodeList.next;
}

const reverseBetween = (head, tail) => {
  let pre = null;
  let cur = head;

  while (pre !== tail) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return [tail, head];
};
module.exports = {
  reverseKGroup: reverseKGroup,
};
