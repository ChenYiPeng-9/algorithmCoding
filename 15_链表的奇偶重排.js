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
function oddEvenList(head) {
  // write code here

  if (head === null) {
    return null;
  }
  // write code here
  let oddNode = head,
    evenNode = head.next,
    evenHead = evenNode;

  while (evenNode !== null && evenNode.next !== null) {
    oddNode.next = evenNode.next;
    oddNode = oddNode.next;

    evenNode.next = oddNode.next;
    evenNode = evenNode.next;
  }

  oddNode.next = evenHead;

  return head;
}
module.exports = {
  oddEvenList: oddEvenList,
};
