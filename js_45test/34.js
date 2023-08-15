/**
 * 34、二进制转换(二进制转十进制)
 * 输入
 * '11000000'
 * 输出
 * 192
 */

function tran2Ten(str){
    // return tranNum = parseInt(str,2);
    return tranNum = str.toString(10);

}

console.log(tran2Ten('11000000'))

// 总结:
// parseInt与toString都可以转换进制
// parseInt(参数1，参数2)参数1表示要转换的数值，参数2表示当前数值的进制 默认转换为10进制
// toString可以转换为除了10进制以外的其他数字，10进制则为字符串