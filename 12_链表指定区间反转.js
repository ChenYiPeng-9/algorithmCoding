function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
function reverseBetween(head, m, n) {
  // write code here
  // 需要哑节点，穿针引线需要pre
  let dummyNodeList = new ListNode();
  dummyNodeList.next = head;
  let prev = dummyNodeList;

  for (let i = 1; i < m; i++) {
    prev = prev.next;
  }

  let cur = prev.next;

  for (let i = 0; i < n - m; i++) {
    let next = cur.next;
    cur.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummyNodeList.next;
}

module.exports = {
  reverseBetween: reverseBetween,
};
