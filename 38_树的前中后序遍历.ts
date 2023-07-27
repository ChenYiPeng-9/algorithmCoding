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
 * @param root TreeNode类 the root of binary tree
 * @return int整型二维数组
 */
export function threeOrders(root: TreeNode): number[][] {
  // write code here

  const preOrderRes: number[] = [];
  const inOrderRes: number[] = [];
  const postOrderRes: number[] = [];

  const preOrder = (root?: TreeNode | null) => {
    if (!root) {
      return;
    }

    preOrderRes.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };

  const inOrder = (root?: TreeNode | null) => {
    if (!root) {
      return;
    }
    inOrder(root.left);
    inOrderRes.push(root.val);
    inOrder(root.right);
  };

  const postOrder = (root?: TreeNode | null) => {
    if (!root) {
      return;
    }

    postOrder(root.left);
    postOrder(root.right);
    postOrderRes.push(root.val);
  };

  preOrder(root);
  inOrder(root);
  postOrder(root);
  return [preOrderRes, inOrderRes, postOrderRes];
}
