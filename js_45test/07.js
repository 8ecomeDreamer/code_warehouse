/**
 * 7、添加元素(开头添加)
 * 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
 *
 * 输入
 * [1，2，3，4]，10
 * 输出
 * [10，1，2，3，4]
 */

const arr = [1, 2, 3, 4];

// 错误代码：

// function unshiftArr(arr, num) {
//   return arr.slice.unshift(num);
// }

// 正确代码：
function prepend(arr, item) {
  let resArr = [...arr];
  resArr.unshift(item);
  return resArr;
}

console.log(prepend(arr, 10), arr);
