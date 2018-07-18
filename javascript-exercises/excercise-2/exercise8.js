function leetSpeak(text){
    var b = "";
    for (let x = 0; x < text.length; x++){
        if (text[x] == 'a'){
            b += 4;
        }
        else if (text[x] == 'e'){
            b += 3;
        } 
        else if (text[x] == 'g'){
            b += 6;
        }
        else if (text[x] == 'l'){
            b += 1;
        }
        else if (text[x] == 'o'){
            b += 0;
        }
        else if (text[x] == 's'){
            b += 5;
        }
        else if (text[x] == 't'){
            b += 7;
        }
        else{
            b += text[x];

        }
    }
    console.log(b);
    
}
leetSpeak('Leet');