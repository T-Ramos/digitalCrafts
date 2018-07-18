function printBanner(text){
    var x = "";
    i = 0;
    while (i < text.length + 4){
        x += "*";
        i++;
    }
    console.log(x);
    console.log("* " + text + " *");
    console.log(x);
}
printBanner("Welcome to DigitalCrafts");