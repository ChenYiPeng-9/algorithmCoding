function merge(intervals: number[][]): number[][] {
  const res: number[][] = [];
  let pre = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (pre[1] >= cur[0]) {
      pre[1] = pre[1] >= cur[1] ? pre[1] : cur[1];
    } else {
      res.push(pre);
      pre = cur;
    }
  }

  res.push(pre);
  return res;
}

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
