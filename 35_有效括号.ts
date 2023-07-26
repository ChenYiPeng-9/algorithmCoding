/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return bool布尔型
 */
export function isValid(s: string): boolean {
  // write code here
  if (s.length % 2 !== 0) {
    return false;
  }
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push("(");
        break;
      case "[":
        stack.push("[");
        break;
      case "{":
        stack.push("{");
        break;
      case ")":
        if (stack.pop() !== "(") {
          return false;
        }
        break;
      case "]":
        if (stack.pop() !== "[") {
          return false;
        }
        break;
      case "}":
        if (stack.pop() !== "{") {
          return false;
        }
        break;
    }
  }

  return !stack.length;
}

console.log(isValid("[]"));
