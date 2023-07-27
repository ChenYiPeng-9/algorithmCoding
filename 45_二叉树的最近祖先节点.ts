class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  o1: number,
  o2: number
): number {
  // write code here

  if (!root) {
    return -1;
  }

  if (root.val === o1 || root.val === o2) {
    return root.val;
  }

  let left = lowestCommonAncestor(root.left, o1, o2);
  let right = lowestCommonAncestor(root.right, o1, o2);
  if (left === -1) {
    return right;
  }
  if (right === -1) {
    return left;
  }

  return root.val;
}
