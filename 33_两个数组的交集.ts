function intersection(nums1: number[], nums2: number[]) {
  const set1: number[] = [...new Set(nums1)];
  const set2: number[] = [...new Set(nums2)];
  const res: number[] = [];

  const map1: Map<number, string> = new Map();
  for (let i = 0; i < set1.length; i++) {
    map1.set(set1[i], "");
  }

  for (let i = 0; i < set2.length; i++) {
    if (map1.has(set2[i])) {
      res.push(set2[i]);
    }
  }

  return res;
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
