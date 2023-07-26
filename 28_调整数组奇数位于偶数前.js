const exchange = (arr) => {
  return arr.sort((a, b) => {
    return (b % 2) - (a % 2);
  });
};

console.log(exchange([1, 2, 4, 3, 5, 7, 9, 10]));
