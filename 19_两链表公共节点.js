function ListNode(x) {
  this.val = x;
  this.next = null;
}

function FindFirstCommonNode(pHead1, pHead2) {
  let cur1 = pHead1;
  let cur2 = pHead2;

  while (cur1 !== cur2) {
    cur1 = cur1 ? cur1.next : pHead2;
    cur2 = cur2 ? cur2.next : pHead1;
  }

  return cur1;
}
module.exports = {
  FindFirstCommonNode: FindFirstCommonNode,
};
