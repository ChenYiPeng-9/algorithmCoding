function ListNode(x) {
  this.val = x;
  this.next = null;
}
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param lists ListNode类一维数组
 * @return ListNode类
 */
function mergeKLists(lists) {
  // write code here
  if (!lists.length) {
    return null;
  }

  return merge(0, lists.length - 1, lists);
}

const merge = (left, right, lists) => {
  if (left === right) {
    return lists[left];
  }

  let mid = left + ((right - left) >> 1);
  let l1 = merge(left, mid, lists);
  let l2 = merge(mid + 1, right, lists);
  return mergeTwoList(l1, l2);
};

const mergeTwoList = (pHead1, pHead2) => {
  let dummyNodeList = new ListNode();
  let curNode = dummyNodeList;

  while (pHead1 && pHead2) {
    if (pHead1.val <= pHead2.val) {
      curNode.next = pHead1;
      pHead1 = pHead1.next;
    } else if (pHead2.val < pHead1.val) {
      curNode.next = pHead2;
      pHead2 = pHead2.next;
    }

    curNode = curNode.next;
  }
  curNode.next = pHead1 ? pHead1 : pHead2;

  return dummyNodeList.next;
};

module.exports = {
  mergeKLists: mergeKLists,
};
