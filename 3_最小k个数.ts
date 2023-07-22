/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param input int整型一维数组
 * @param k int整型
 * @return int整型一维数组
 */
export function GetLeastNumbers_Solution(input: number[], k: number) {
  // write code here
  //   return input
  //     .sort((a, b) => {
  //       if (a < b) {
  //         return -1;
  //       } else {
  //         return 1;
  //       }
  //     })
  //     .slice(0, k);

  let start = 0,
    end = input.length - 1;
  const kThIndex = k - 1;

  while (start <= end) {
    let partitionIndex = partition(input, start, end);
    if (partitionIndex === kThIndex) {
      return input.slice(0, k);
    } else if (partitionIndex < kThIndex) {
      start = partitionIndex + 1;
    } else if (partitionIndex > kThIndex) {
      end = partitionIndex - 1;
    }
  }

  return [];
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

console.log(GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4));
