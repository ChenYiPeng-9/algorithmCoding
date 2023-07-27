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
 * @param target int整型
 * @return int整型二维数组
 */
export function FindPath(root: TreeNode, target: number): number[][] {
  // write code here

  let res: number[][] = [];
  let path: number[] = [];

  const traversal = (root: TreeNode | null, sum: number) => {
    if (!root) {
      return;
    }

    sum -= root.val;
    path.push(root.val);

    if (!root.left && !root.right && !sum) {
      res.push([...path]);
    }

    traversal(root.left, sum);
    traversal(root.right, sum);

    path.pop();
  };

  traversal(root, target);
  return res;
}
