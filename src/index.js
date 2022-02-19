//module.exports =
module.exports = function check(str, bracketsConfig) {
  let stack = [];
  str = str.split("");
  for (let index = 0; index < str.length; index++) {
    if (stack.length !== 0 && str[index] !== stack[stack.length - 1]) {
      str.splice(str[index], 1);
      stack.pop();
      index--;
    } else if (str[index] === str[index + 1]) {
      stack.push(str[index]);
      str.splice(str[index], 1);

      index--;
    } else if (str[index] !== str[index + 1]) {
      str.splice(index, 2);
      index--;
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};

//console.log(check("((()))()", []));
