/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return int整型
 */
export function compare(version1: string, version2: string): number {
  // write code here
  const versionArr1 = version1.split(".");
  const versionArr2 = version2.split(".");

  const maxLen = Math.max(versionArr1.length, versionArr2.length);

  for (let i = 0; i < maxLen; i++) {
    const val1 = versionArr1[i] ? parseInt(versionArr1[i]) : 0;
    const val2 = versionArr2[i] ? parseInt(versionArr2[i]) : 0;
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    }
  }

  return 0;
}

console.log(compare("1.1", "2.1"));
