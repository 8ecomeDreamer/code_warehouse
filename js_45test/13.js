/**
 * 13、求二次方
 * 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 *
 * 输入
 * [1，2，3，4]
 * 输出
 * [1，4，9，16]
 */

function  calcPow(arr) {
    let resArr = arr.map(item => {
        return item*item;
    })
    return resArr;
}

console.log(calcPow([1, 2, 3, 4]));
