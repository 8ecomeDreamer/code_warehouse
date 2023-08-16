/**
 * 35、二进制转换(十进制转8位二进制)
 * 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补0到满8位
 * 输入
 * 65
 * 输出
 * 01000001
 */

function autoTransition(num) {
  // return tranNum = parseInt(str,2);
  let tranNum = num.toString(2);
  if (tranNum.length < 8) {
    const zeroNum = 8 - tranNum.length;
    let zeroStr = "";
    for (let i = zeroNum; i >= 1; --i) {
      zeroStr += "0";
    }
    tranNum = String(zeroStr) + String(tranNum);
  }

  return tranNum;
}

console.log(autoTransition(65));

// 总结:
// 写的复杂了

function autoTransition(num) {
  // return tranNum = parseInt(str,2);
  let tranNum = num.toString(2);
  while (tranNum.length < 8) {
    tranNum = "0" + tranNum;
  }

  return tranNum;
}

console.log(autoTransition(65));
