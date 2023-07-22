/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
export function MySort(arr: number[]) {
  // 冒泡排序
  // return bubblingSort(arr);
  // 快速排序
  return quickSort(arr, 0, arr.length - 1);
}

//=====================================================
const bubblingSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// ===================================================

const quickSort = (arr: number[], start: number, end: number) => {
  if (start >= end || end < 2) {
    return arr;
  }

  const index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
  return arr;
};

const partition = (arr: number[], start: number, end: number) => {
  const pivot = arr[start];
  while (start < end) {
    while (start < end && arr[end] >= pivot) {
      end--;
    }
    arr[start] = arr[end];
    while (arr[start] < pivot) {
      start++;
    }
    arr[end] = arr[start];
  }
  arr[start] = pivot;
  return start;
};

console.log(bubblingSort([1, 3, 2, 5, 4, 9, 7, 6]));
