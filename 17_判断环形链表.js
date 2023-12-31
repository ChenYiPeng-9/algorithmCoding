function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 *
 * @param head ListNode类
 * @return bool布尔型
 */
function hasCycle(head) {
  // write code here

  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }

  return false;
}
module.exports = {
  hasCycle: hasCycle,
};
