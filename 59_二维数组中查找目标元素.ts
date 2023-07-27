/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param target int整型
 * @param array int整型二维数组
 * @return bool布尔型
 */
export function Find(target: number, array: number[][]): boolean {
  // write code here

  if (!array.length) {
    return false;
  }

  const X = array[0].length,
    Y = array.length;
  let x = 0,
    y = Y - 1;

  while (x < X && y >= 0) {
    if (array[y][x] === target) {
      return true;
    } else if (array[y][x] < target) {
      x++;
    } else if (array[y][x] > target) {
      y--;
    }
  }

  return false;
}

console.log(
  Find(7, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ])
);
