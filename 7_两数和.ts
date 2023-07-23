/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @param target int整型
 * @return int整型一维数组
 */
export function twoSum(numbers: number[], target: number): number[] {
  // write code here
  const numbersMap: Map<number, number> = new Map();

  for (let i = 0; i < numbers.length; i++) {
    numbersMap.set(numbers[i], i);
  }

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    const canSearched = numbersMap.has(diff);
    if (canSearched && i !== numbersMap.get(diff)) {
      return [i + 1, numbersMap.get(diff)! + 1];
    }
  }
}
