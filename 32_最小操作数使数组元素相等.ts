function minMoves(nums: number[]): number {
  const minVal: number = Math.min(...nums);
  let count: number = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] - minVal;
  }

  return count;
}

console.log(minMoves([1, 2, 3]));
