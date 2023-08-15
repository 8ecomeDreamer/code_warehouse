function autoTransition(num){
    // return tranNum = parseInt(str,2);
    let tranNum = num.toString(2);
    while(tranNum.length < 8){
        tranNum = '0' + tranNum
    }

    return tranNum
}

console.log(autoTransition(65))