/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @param m int整型
 * @return int整型
 */
function ysf(n, m) {
  // write code here

  let ans = 0;

  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i;
  }
  return ans + 1;
}
module.exports = {
  ysf: ysf,
};
