/**
 * 10、添加元素(指定位置添加)
 * 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
 *
 * 输入
 * [1，2，3，4]，'z'，2
 * 输出
 * [1，2,'z'，3，4]
 */

const arr = [1, 2, 3, 4];

function pushItemWithoutUsePreArr(arr, item, index) {
  // return arr1.concat(arr2);
  const newArr = [...arr];
  newArr.forEach((el, idx) => {
    if (idx === index) {
      newArr.splice(idx, 0, item);
    }
  });
  return newArr;
}

console.log(pushItemWithoutUsePreArr(arr, "z", 2), arr);

// 其他解题方法：
// 先复制前index个元素，将元素插入后，再拼接index之后的元素
// push.apply + splice push.apply 改变的是原数组
function insert(arr, item, index) {
  let resArr = [];
  [].push.apply(resArr, arr);
  resArr.splice(index, 0, item);
  // console.log(resArr);
  return resArr;
}
// insert(arr, "z", 2);
console.log(insert(arr, "z", 2), arr);
