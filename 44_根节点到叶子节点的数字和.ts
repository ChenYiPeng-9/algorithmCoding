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
 * @return int整型
 */
export function sumNumbers(root: TreeNode): number {
  // write code here

  const traversal = (root: TreeNode | null, prevSum: number) => {
    if (!root) {
      return 0;
    }
    let sum = prevSum * 10 + root.val;

    if (!root.left && !root.right) {
      return sum;
    }

    return traversal(root.left, sum) + traversal(root.right, sum);
  };

  return traversal(root, 0);
}
