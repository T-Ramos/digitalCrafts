function beer(){
    for(x = 99; x > 0; x--){
        if(x % 7 == 0 && x % 5 == 0){
            console.log(`${x} bottles of Miller Lite on the wall, ${x} of Miller Lite, take one down, pass it around, ${x - 1} bottles of beer on the wall`);
        }
        else if(x % 7 == 0){
            console.log(`${x} bottles of Miller on the wall, ${x} of Miller, take one down pass it around, ${x - 1} bottels of beer on the wall`);
        }
        else if(x % 5 == 0){
            console.log(`${x} bottles of Lite Beer on the wall, ${x} bottles of Lite Beer, take one down pass it around, ${x - 1} bottles of beer on the wall`);
        }
        else {
            console.log(`${x} bottles of Beer on the wall, ${x} bottles of beer, take one down pass it around, ${x - 1} bottles of beer on the wall`);
        }
    };
}
beer();