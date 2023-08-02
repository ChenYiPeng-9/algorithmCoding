/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param prices int整型一维数组
 * @return int整型
 */
export function maxProfit(prices: number[]): number {
  // write code here

  const dp = new Array(prices.length);
  dp[0] = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
  }

  return dp[prices.length - 1];
}

console.log(maxProfit([8, 9, 2, 5, 4, 7, 1]));
