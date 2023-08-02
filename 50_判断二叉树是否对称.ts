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
 * @param pRoot TreeNode类
 * @return bool布尔型
 */
export function isSymmetrical(pRoot: TreeNode): boolean {
  // write code here

  const traversal = (r1: TreeNode | null, r2: TreeNode | null) => {
    if (!r1 && !r2) {
      return true;
    }

    if (!r1 || !r2) {
      return false;
    }

    return (
      traversal(r1.left, r2.right) &&
      traversal(r1.right, r2.left) &&
      r1.val === r2.val
    );
  };

  return traversal(pRoot, pRoot);
}
