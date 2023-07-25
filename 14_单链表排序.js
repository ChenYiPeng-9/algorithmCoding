function ListNode(x) {
  this.val = x;
  this.next = null;
}

function sortInList(head) {
  // write code here
  let cur = head;
  let nodeArr = [];
  while (cur) {
    nodeArr.push(cur.val);
    cur = cur.next;
  }

  let dummyNodeList = new ListNode();
  let curNode = dummyNodeList;

  nodeArr
    .sort((a, b) => a - b)
    .forEach((itemVal) => {
      curNode.next = new ListNode(itemVal);
      curNode = curNode.next;
    });

  return dummyNodeList.next;
}
module.exports = {
  sortInList: sortInList,
};
