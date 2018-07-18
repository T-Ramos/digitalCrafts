function positiveNumbers(arra){
    var i = [];
    for(x=0; x < arra.length; x++){
        if (arra[x] >= 0){
            i.push(arra[x]);
        }
    }
    console.log(i);
}
positiveNumbers([1, -1, 5, -2, 4]);