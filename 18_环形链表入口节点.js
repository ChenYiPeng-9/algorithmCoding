function ListNode(x) {
  this.val = x;
  this.next = null;
}

function EntryNodeOfLoop(pHead) {
  // write code here
  let fast = pHead,
    slow = pHead;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      break;
    }
  }

  if (fast === null || fast.next === null) {
    return null;
  }
  slow = pHead;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
module.exports = {
  EntryNodeOfLoop: EntryNodeOfLoop,
};
