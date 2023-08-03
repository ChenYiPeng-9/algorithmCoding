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

  if (!head) {
    return null;
  }

  let fast = head,
    slow = head;

  while (fast) {
    if (fast.val !== slow.val) {
      slow.next = fast;
      slow = slow.next;
    }

    fast = fast.next;
  }

  slow.next = null;

  return head;
}
module.exports = {
  deleteDuplicates: deleteDuplicates,
};
