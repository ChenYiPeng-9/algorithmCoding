/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */
export function permute(num: number[]): number[][] {
  // write code here

  const res: number[][] = [];

  const dfs = (path: number[]) => {
    if (path.length === num.length) {
      res.push([...path]);
    }

    for (let i = 0; i < num.length; i++) {
      if (path.includes(num[i])) {
        continue;
      }

      path.push(num[i]);
      dfs(path);
      path.pop();
    }
  };

  dfs([]);

  return res;
}

console.log(permute([1, 2, 3]));
