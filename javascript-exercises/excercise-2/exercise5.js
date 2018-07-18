function printSquare(size){
    var x = "" 
    i = 0;
    while (i < size){
        x += "*";
        i += 1;
    }
    z = 0;
    while (z < size){
        console.log(x);
        z ++;
    }
}
printSquare(6);