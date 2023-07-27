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
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: number,
  q: number
): number {
  // write code here

  if (!root) {
    return -1;
  }

  if (root.val < p && root.val < q) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (root.val > p && root.val > q) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root.val;
  }
}
