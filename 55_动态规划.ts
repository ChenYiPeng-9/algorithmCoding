const JieCheng = (n: number): number => {
  if (n <= 1) {
    return 1;
  }

  return n * JieCheng(n - 1);
};

console.log("阶乘", JieCheng(5));

const FieBoNaQie = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return FieBoNaQie(n - 1) + FieBoNaQie(n - 2);
};

console.log("斐波那契", FieBoNaQie(5));

const TiaoTaiJie = (n: number): number => {
  if (n <= 2) {
    return n;
  }

  return TiaoTaiJie(n - 2) + TiaoTaiJie(n - 1);
};

console.log("跳台阶", TiaoTaiJie(7));
