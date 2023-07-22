/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param a int整型一维数组
 * @param n int整型
 * @param K int整型
 * @return int整型
 */
export function findKth(a: number[], n: number, K: number) {
  // write code here

  //   return a.sort((a, b) => a - b)[n - K];

  let start = 0,
    end = n - 1;
  const kThIndex = n - K;

  while (start <= end) {
    let partitionIndex = partition(a, start, end);
    if (partitionIndex === kThIndex) {
      return a[partitionIndex];
    } else if (partitionIndex < kThIndex) {
      start = partitionIndex + 1;
    } else if (partitionIndex > kThIndex) {
      end = partitionIndex - 1;
    }
  }

  return -1;
}

const partition = (arr: number[], start: number, end: number) => {
  const pivot = arr[start];
  while (start < end) {
    while (start < end && arr[end] >= pivot) {
      end--;
    }
    arr[start] = arr[end];
    while (start < end && arr[start] < pivot) {
      start++;
    }
    arr[end] = arr[start];
  }
  arr[start] = pivot;
  return start;
};

console.log(findKth([10, 10, 9, 9, 8, 7, 5, 6, 4, 3, 4, 2], 12, 3));
