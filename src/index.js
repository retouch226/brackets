//module.exports =

module.exports = function check(str, bracketsConfig) {
  let stackScope = [];
  let slashScope = [];
  let figureScope = [];
  str = str.split("");
  const types = ["(", ")", "|", "{", "}", "[", "]"];
  for (let index = 0; index < str.length; index++) {
    if (index != str.length - 1) {
      if (str[index] === "(" || str[index] === ")") {
        if (
          stackScope.length !== 0 &&
          str[index] !== stackScope[stackScope.length - 1]
        ) {
          str.splice(str[index], 1);
          stackScope.pop();
          index--;
          continue;
        } else if (str[index] === str[index + 1]) {
          stackScope.push(str[index]);
          str.splice(str[index], 1);
          index--;
          continue;
        } else if (str[index] === "(" && str[index] !== str[index + 1]) {
          str.splice(index, 2);
          index--;
          continue;
        }
      }
      if (str[index] === "|") {
        if (
          slashScope.length !== 0 &&
          str[index] === slashScope[slashScope.length - 1]
        ) {
          str.splice(str[index], 1);
          slashScope.pop();
          index--;
          continue;
        }
        if (str[index] === str[index + 1]) {
          str.splice(index, 2);
          index--;
          continue;
        } else if (str[index] !== str[index + 1]) {
          slashScope.push(str[index]);
          str.splice(str[index], 1);
          index--;
          continue;
        }
      }
    } else {
      break;
    }
  }
  if (stackScope.length === 0 && str.length === 0 && slashScope.length === 0) {
    return true;
  }
  return false;
};

///////primitive
// function check(str, bracketsConfig) {
//   let stackScope = [];
//   str = str.split("");
//   for (let index = 0; index < str.length; index++) {
//     if (index != str.length - 1) {
//       if (stackScope.length !== 0 && str[index] !== stackScope[stackScope.length - 1]) {
//         str.splice(str[index], 1);
//         stackScope.pop();
//         index--;
//       } else if (str[index] === str[index + 1]) {
//         stackScope.push(str[index]);
//         str.splice(str[index], 1);
//         index--;
//       } else if (str[index] !== str[index + 1]) {
//         str.splice(index, 2);
//         index--;
//       }
//     } else {
//       break;
//     }
//   }
//   if (stackScope.length === 0 && str.length === 0) {
//     return true;
//   }
//   return false;
// }

//console.log(check("|()|(||)||", []));
