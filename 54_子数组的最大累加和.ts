/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型
 */
export function FindGreatestSumOfSubArray(array: number[]): number {
  // write code here

  const dp = new Array(array.length);
  dp[0] = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    dp[i] = array[i];
    if (dp[i - 1] >= 0) {
      dp[i] = dp[i - 1] + dp[i];
    }
    max = Math.max(max, dp[i]);
  }

  return max;
}

console.log(FindGreatestSumOfSubArray([1, -2, 3, 10, -4, 7, 2, -5]));
