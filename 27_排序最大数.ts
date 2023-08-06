const maxArrStr = (arr: Array<number>): string => {
  arr.sort((a, b) => {
    let val1 = a + "" + b;
    let val2 = b + "" + a;
    return Number(val2) - Number(val1);
  });

  return arr.join("");
};

console.log(maxArrStr([1, 20, 40]));
