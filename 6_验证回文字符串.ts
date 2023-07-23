/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串 待判断的字符串
 * @return bool布尔型
 */
export function judge(str: string) {
  //   return str.split("").reverse().join("") === str;
  let left = 0,
    right = 0;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(judge("absba"));
