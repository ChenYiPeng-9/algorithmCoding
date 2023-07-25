function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 */
function deleteDuplicates(head) {
  // write code here

  let dummyNodeList = new ListNode();
  let cur = dummyNodeList;
  dummyNodeList.next = head;

  while (cur.next !== null && cur.next.next != null) {
    if (cur.next.val === cur.next.next.val) {
      let xVal = cur.next.val;

      while (cur.next && cur.next.val === xVal) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummyNodeList.next;
}
module.exports = {
  deleteDuplicates: deleteDuplicates,
};
