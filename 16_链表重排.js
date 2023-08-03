function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 *
 * @param head ListNode类
 * @return void
 */
function reorderList(head) {
  const nodeListArr = [];

  let cur = head;

  while (cur) {
    nodeListArr.push(cur);
    cur = cur.next;
  }

  let dummyNodeList = new ListNode();
  let curNode = dummyNodeList;
  let left = 0;
  let right = nodeListArr.length - 1;

  while (left <= right) {
    curNode.next = nodeListArr[left];
    curNode = curNode.next;
    left++;

    curNode.next = nodeListArr[right];
    curNode = curNode.next;
    right--;
  }

  curNode.next = null;
  return dummyNodeList.next;
}
module.exports = {
  reorderList: reorderList,
};
