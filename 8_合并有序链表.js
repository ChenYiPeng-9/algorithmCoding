function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 */
function Merge(pHead1, pHead2) {
  // write code here
  let dummyNodeList = new ListNode(0);
  let cur = dummyNodeList;

  while (pHead1 && pHead2) {
    if (pHead1.val <= pHead2.val) {
      cur.next = pHead1;
      pHead1 = pHead1.next;
    } else if (pHead2.val < pHead1.val) {
      cur.next = pHead2;
      pHead2 = pHead2.next;
    }
    cur = cur.next;
  }

  cur.next = pHead1 ? pHead1 : pHead2;
  return dummyNodeList.next;
}
module.exports = {
  Merge: Merge,
};
