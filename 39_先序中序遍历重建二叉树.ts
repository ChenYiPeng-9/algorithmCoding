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
 * @param preOrder int整型一维数组
 * @param vinOrder int整型一维数组
 * @return TreeNode类
 */
export function reConstructBinaryTree(
  preOrder: number[],
  vinOrder: number[]
): TreeNode | null {
  // write code here

  const traversal = (vinOrderNum: number[]) => {
    if (vinOrderNum.length === 0) {
      return null;
    }
    let rootVal = preOrder.shift();
    let rootValIndex = vinOrderNum.indexOf(rootVal!);

    let root = new TreeNode(rootVal);
    root.left = traversal(vinOrderNum.slice(0, rootValIndex));
    root.right = traversal(vinOrderNum.slice(rootValIndex + 1));

    return root;
  };

  return traversal(vinOrder);
}

console.log(
  reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6])
);
