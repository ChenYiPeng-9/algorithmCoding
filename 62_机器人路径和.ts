/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix int整型二维数组 the matrix
 * @return int整型
 */
export function minPathSum(grid: number[][]) {
  // write code here
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from(new Array(m), () => new Array(n));

  for (let i = 0; i < m; i++) {
    dp[i][0] = i === 0 ? grid[0][0] : dp[i - 1][0] + grid[i][0];
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = j === 0 ? grid[0][0] : dp[0][j - 1] + grid[0][j];
  }

  // console.log(dp,'dp');

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
}
