/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A int整型一维数组
 * @param m int整型
 * @param B int整型一维数组
 * @param n int整型
 * @return 无
 */
export function merge(A: number[], m: number, B: number[], n: number) {
  // write code here

  let p1 = m - 1,
    p2 = n - 1,
    p3 = m + n - 1;

  while (p1 > -1 || p2 > -1) {
    if (p1 < 0) {
      A[p3--] = B[p2--];
    }

    if (p2 < 0) {
      A[p3--] = A[p1--];
    }

    if (A[p1] >= B[p2]) {
      A[p3--] = A[p1--];
    }

    if (A[p1] < B[p2]) {
      A[p3--] = B[p2--];
    }
  }

  return A;
}

console.log(merge([4, 5, 6], 3, [1, 2, 3], 3));
console.log([4, 5, 6, 7]);
