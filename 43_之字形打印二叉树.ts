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
 * @return int整型二维数组
 */
export function Print(pRoot: TreeNode): number[][] {
  // write code here

  const res: number[][] = [];
  const depth: number = 0;

  const traversal = (root: TreeNode | null, depth: number) => {
    if (!root) {
      return;
    }
    if (!res[depth]) {
      res[depth] = [];
    }

    res[depth].push(root.val);
    traversal(root.left, depth + 1);
    traversal(root.right, depth + 1);
  };

  traversal(pRoot, depth);

  res.forEach((item, index) => {
    if (index % 2 === 1) {
      item.reverse();
    }
  });

  return res;
}
