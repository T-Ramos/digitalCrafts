// import { fstat } from "fs";

//num 1
console.log('HELLO WORLD!');
//num 2
console.log(process.argv);
var num1 = Number(process.argv[2]);
var num2 = Number(process.argv[3]);
var num3 = Number(process.argv[4]);
console.log(num1 + num2 + num3);

var fs = require('fs');
var path = require('path');

//num3
console.log((fs.readFileSync(process.argv[2])).toString().split('\n').length-1);
//num4
fs.readFile(process.argv[2], 'utf8', function (err, data){
    if (err) throw err;
    console.log(data.split('\n').length-1);
});
//num5
fs.readdir(process.argv[2], function (err, files){
    if (err) throw err;
    files.forEach(function(exten){
        if(path.extname(exten) == ('.md')){
            console.log(exten);
        }
    })
})