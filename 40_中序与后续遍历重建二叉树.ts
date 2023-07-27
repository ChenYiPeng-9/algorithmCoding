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
 * @param inorder int整型一维数组 中序遍历序列
 * @param postorder int整型一维数组 后序遍历序列
 * @return TreeNode类
 */
export function buildTree(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  // write code here

  const traversal = (inorderNum: number[]) => {
    if (!inorderNum.length) {
      return null;
    }

    const rootVal = postorder.pop();
    const rootValIndex = inorderNum.indexOf(rootVal!);

    const root = new TreeNode(rootVal);
    root.right = traversal(inorderNum.slice(rootValIndex + 1));
    root.left = traversal(inorderNum.slice(0, rootValIndex));

    return root;
  };

  return traversal(inorder);
}

console.log(buildTree([2, 1, 4, 3, 5], [2, 4, 5, 3, 1]));
