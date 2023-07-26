function majorityElement(nums: number[]): number {
  let res: number = nums[0],
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      res = nums[i];
      count++;
    } else {
      count += nums[i] === res ? 1 : -1;
    }
  }

  return res;
}

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
