function minMoves(nums: number[]): number {
  const min = Math.min(...nums);

  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res += nums[i] - min;
  }

  return res;
}

console.log(minMoves([1, 2, 3]));
