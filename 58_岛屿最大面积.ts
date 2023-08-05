/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param grid int整型二维数组
 * @return int整型
 */
export function maxAreaIsland(grid: number[][]): number {
  // write code here

  const lenX = grid.length,
    lenY = grid[0].length;

  let maxRes = 0;
  let count = 0;

  for (let i = 0; i < lenX; i++) {
    for (let j = 0; j < lenY; j++) {
      if (grid[i][j] === 1) {
        count = countLand(i, j, grid);
      }
    }
    maxRes = Math.max(maxRes, count);
  }

  return maxRes;
}

const countLand = (x: number, y: number, grid: number[][]) => {
  if (
    x < 0 ||
    x > grid.length - 1 ||
    y < 0 ||
    y > grid[0].length - 1 ||
    grid[x][y] === 0
  ) {
    return 0;
  }

  grid[x][y] = 0;
  let countNum = 1;

  countNum += countLand(x - 1, y, grid);
  countNum += countLand(x + 1, y, grid);
  countNum += countLand(x, y - 1, grid);
  countNum += countLand(x, y + 1, grid);

  return countNum;
};
