function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
  // write code here

  if (pHead === null) {
    return null;
  }

  let num = k;
  let cur = pHead;

  while (num > 1) {
    cur = cur.next;
    num--;
    if (cur === null) {
      return null;
    }
  }

  let fast = pHead,
    slow = pHead;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  if (fast === null) {
    return pHead;
  }

  while (fast !== null && fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.next;
}
module.exports = {
  FindKthToTail: FindKthToTail,
};
