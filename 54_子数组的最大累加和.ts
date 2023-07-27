/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型
 */
export function FindGreatestSumOfSubArray(array: number[]): number {
  // write code here

  const len = array.length;
  const dp = new Array(len);
  dp[0] = array[0];
  let res = array[0];

  for (let i = 1; i < len; i++) {
    dp[i] = array[i];
    if (dp[i - 1] > 0) {
      dp[i] += dp[i - 1];
    }
    res = Math.max(res, dp[i]);
  }

  return res;
}
