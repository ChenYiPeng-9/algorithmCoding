/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix int整型二维数组
 * @return int整型一维数组
 */
export function spiralOrder(matrix: number[][]): number[] {
  // write code here

  if (!matrix.length) {
    return [];
  }

  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;

  const res: number[] = [];

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }

    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right]);
    }

    for (let j = right; j > left; j--) {
      res.push(matrix[bottom][j]);
    }

    for (let j = bottom; j > top; j--) {
      res.push(matrix[j][left]);
    }

    left++;
    right--;
    top++;
    bottom--;
  }

  if (left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
  } else if (top === bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
  }

  return res;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
