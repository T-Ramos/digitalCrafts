function printBox(width, height){
    var x = "";
    i = 0;
    while (i < width){
        x += "*";
        i++;
    }
    console.log(x);
    var z = 0;
    a = "*";
    while (z < width - 2){
        a += " ";
        z++;
    }
    a += "*";
    b = 0;
    while (b < height - 2){
        console.log(a);
        b ++;
    }
    console.log(x);
    
}
printBox(7, 6);