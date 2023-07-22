const arr = [1, 3, 5, 5, 67, 8, 5, 2, 0];

const doSort = (arr) => {
  arr.sort((a, b) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });

  return arr;
};

console.log(doSort(arr));
