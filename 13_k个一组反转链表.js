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
  dummyNodeList.next = head;
  let prev = dummyNodeList;

  while (head) {
    let tail = prev;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (tail === null) {
        return dummyNodeList.next;
      }
    }

    let next = tail.next;

    [head, tail] = reverseBetween(head, tail);
    prev.next = head;
    tail.next = next;

    prev = tail;
    head = tail.next;
  }

  return dummyNodeList.next;
}

const reverseBetween = (head, tail) => {
  let prev = tail.next;
  let cur = head;

  while (prev !== tail) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return [tail, head];
};
module.exports = {
  reverseKGroup: reverseKGroup,
};
