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
 * @param nums int整型一维数组
 * @return TreeNode类
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  // write code here

  if (!nums.length) {
    return null;
  }

  let midIndex = nums.length >> 1;
  let midVal = nums[midIndex];

  let root = new TreeNode(midVal);

  root.left = sortedArrayToBST(nums.slice(0, midIndex));
  root.right = sortedArrayToBST(nums.slice(midIndex + 1));

  return root;
}

console.log(sortedArrayToBST([-1, 0, 1, 2]));
