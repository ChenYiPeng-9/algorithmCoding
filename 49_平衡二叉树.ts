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
export function IsBalanced_Solution(pRoot: TreeNode | null): boolean {
  // write code here

  if (!pRoot) {
    return true;
  }

  return (
    IsBalanced_Solution(pRoot.left) &&
    IsBalanced_Solution(pRoot.right) &&
    Math.abs(calcHeight(pRoot.left) - calcHeight(pRoot.right)) <= 1
  );
}

const calcHeight = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }

  const left = calcHeight(root.left);
  const right = calcHeight(root.right);

  return Math.max(left, right) + 1;
};
