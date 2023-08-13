/**
 * 18、完全等同
 * 判断 val1 和 val2 是否完全等同
 */

// 原代码：
function  identity(val1,val2) {
   if(val1 === val2){
    return true;
   } else {
    return false;
   }
}

// parseInt(string, radix) 函数可解析一个字符串，并返回一个整数。参数 radix 表示要解析的数字的基数。该值介于 2 ~ 36 之间。
// 如果省略该参数或其值为 0，parseInt() 会根据 string 来判断数字的基数。
// 举例，如果 string 以 “0x” 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。
// 而本题则是要求解析为十进制的整数。


// 解决办法：
function  parse2Int(num) {
    return parseInt(num,10)
}