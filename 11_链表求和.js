function ListNode(x) {
  this.val = x;
  this.next = null;
}
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
function addInList(head1, head2) {
  // write code here

  let l1 = reverseListNode(head1);
  let l2 = reverseListNode(head2);

  let dummyNodeList = new ListNode();
  let cur = dummyNodeList;
  let carry = 0,
    sum,
    val1,
    val2;

  while (l1 || l2) {
    val1 = l1 ? l1.val : 0;
    val2 = l2 ? l2.val : 0;
    sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  return reverseListNode(dummyNodeList.next);
}

const reverseListNode = (head) => {
  let cur = head,
    pre = null,
    next;

  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};
module.exports = {
  addInList: addInList,
};
