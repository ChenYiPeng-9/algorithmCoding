const sortVersions = (versions: String[]) => {
  return versions.sort((a, b): any => {
    const array1 = a.split(".");
    const array2 = b.split(".");
    const maxLen = Math.max(array1.length, array2.length);
    for (let i = 0; i < maxLen; i++) {
      let val1 = parseInt(array1[i]);
      let val2 = parseInt(array2[i]);

      if (val1 && !val2) {
        return 1;
      } else if (val2 && !val1) {
        return -1;
      } else {
        if (val1 === val2) {
          continue;
        }
        return val1 - val2;
      }
    }
  });
};

let versions = ["1.45", "1.51.0", "1.2.3"];
console.log(sortVersions(versions));
