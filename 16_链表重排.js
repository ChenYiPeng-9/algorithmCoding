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
  // write code here
  let nodeArr = [];
  let curTest = head;
  while (curTest) {
    nodeArr.push(curTest);
    curTest = curTest.next;
  }

  // console.log(nodeArr);
  let dummyNodeList = new ListNode();
  let cur = dummyNodeList;
  let left = 0,
    right = nodeArr.length - 1;

  while (left <= right) {
    cur.next = nodeArr[left];
    cur = cur.next;
    left++;

    cur.next = nodeArr[right];
    cur = cur.next;
    right--;
  }

  cur.next = null;
  console.log(dummyNodeList, "dummyNodeList");
  return dummyNodeList.next;
}
module.exports = {
  reorderList: reorderList,
};
