/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param x int整型
 * @return int整型
 */
export function sqrt(x: number) {
  if (x < 2) {
    return x;
  }

  let start = 0,
    end = x >> 1;

  while (start <= end) {
    let mid = start + ((end - start) >> 1);
    if (mid ** 2 === x) {
      return mid;
    } else if (mid ** 2 < x) {
      start = mid + 1;
    } else if (mid ** 2 > x) {
      end = mid - 1;
    }
  }
}
