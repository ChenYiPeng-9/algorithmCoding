/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 判断岛屿数量
 * @param grid char字符型二维数组
 * @return int整型
 */
export function solve(grid: number[][]): number {
  // write code here
  const lenX = grid.length,
    lenY = grid[0].length;

  let count = 0;

  for (let i = 0; i < lenX; i++) {
    for (let j = 0; j < lenY; j++) {
      if (grid[i][j] === 1) {
        count++;
        turnZero(i, j, grid);
      }
    }
  }

  return count;
}

const turnZero = (x: number, y: number, grid: number[][]) => {
  if (
    x < 0 ||
    x > grid.length - 1 ||
    y < 0 ||
    y > grid.length - 1 ||
    grid[x][y] === 0
  ) {
    return;
  }

  grid[x][y] = 0;

  turnZero(x, y + 1, grid);
  turnZero(x, y - 1, grid);
  turnZero(x + 1, y, grid);
  turnZero(x - 1, y, grid);
};

console.log(solve([[0]]));
