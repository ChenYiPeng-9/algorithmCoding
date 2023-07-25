// parseInt(string, radix):输出的肯定是10进制
// string：要被解析的字符串。
// radix：可选参数，表示要解析的数字的基数（进制）。
// 如果省略该参数，则默认按照十进制进行解析。

// (num).toString(radix): 转换为相应进制数字的字符串

const transform = (number) => {
  let res = [];

  while (number) {
    let remain = number % 26 ? number % 26 : 26;
    res.unshift(String.fromCharCode(remain + 64));
    number = Math.floor((number - remain) / 26);
  }

  return res.join("");
};

console.log(transform(28));
// AB
