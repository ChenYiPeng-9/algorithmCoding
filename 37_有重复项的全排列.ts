/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */
export function permuteUnique(num: number[]): number[][] {
  // write code here
  const res: number[][] = [];
  const visited: boolean[] = new Array(num.length);
  num.sort();

  const dfs = (path: number[]) => {
    if (path.length === num.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < num.length; i++) {
      if (visited[i]) {
        continue;
      }

      if (i - 1 >= 0 && num[i] === num[i - 1] && !visited[i - 1]) {
        continue;
      }

      path.push(num[i]);
      visited[i] = true;
      dfs(path);
      path.pop();
      visited[i] = false;
    }
  };

  dfs([]);

  return res;
}
