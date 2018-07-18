function longVowel(strin){
    var b = "";
    for( let x = 0; x < strin.length; x++){
        if (strin[x] == 'a' && strin[x+1] == 'a'){
            b += 'a';
            b += 'a';
            b += 'a';
        }
        else if (strin[x] == "e" && strin[x+1] == 'e'){
            b += 'e';
            b += 'e';
            b += 'e';

        }
        else if (strin[x] == "i" && strin[x+1] == 'i'){
            b += 'i';
            b += 'i';
            b += 'i';
        }
        else if (strin[x] == "o" && strin[x+1] == 'o'){
            b += 'o';
            b += 'o';
            b += 'o';
        }
        else if (strin[x] == "u" && strin[x+1] == 'u'){
            b += 'u';
            b += 'u';
            b += 'u';
        }
        else {
            b += strin[x];
        }
    }
    console.log(b);
}

longVowel("heelloo");