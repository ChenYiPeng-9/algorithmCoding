function merge(intervals: number[][]): number[][] {
  const res: number[][] = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (prev[1] >= cur[0]) {
      prev = [prev[0], prev[1] >= cur[1] ? prev[1] : cur[1]];
    } else {
      res.push(prev);
      prev = cur;
    }
  }
  res.push(prev);
  return res;
  //   return intervals;
}

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
