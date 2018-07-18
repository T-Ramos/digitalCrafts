function printNumbers(startNum, endNum){
     for (x = startNum; x <= endNum; x++){
         console.log(x);
     }
}
console.log(printNumbers(1, 5))



function printNumbers1(startNum, endNum){
    var x = startNum;
    while (x <= endNum){
        console.log(x);
        x++;
    }
}
console.log(printNumbers1(1, 5))