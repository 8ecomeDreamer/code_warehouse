/**
 * 17、正确的使用 parselnt
 * 修改js 代码中 parselnt 的调用方式，使之通过全部测试用例
 *
 * 输入
 * '12'
 * 输出
 * 12
 * 
 * 输入
 * '12px'
 * 输出
 * 12
 */

// 原代码：
function  parse2Int(num) {
    return parseInt(num)
}

// parseInt(string, radix) 函数可解析一个字符串，并返回一个整数。参数 radix 表示要解析的数字的基数。该值介于 2 ~ 36 之间。
// 如果省略该参数或其值为 0，parseInt() 会根据 string 来判断数字的基数。
// 举例，如果 string 以 “0x” 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。
// 而本题则是要求解析为十进制的整数。


// 解决办法：
function  parse2Int(num) {
    return parseInt(num,10)
}