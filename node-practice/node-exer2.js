//Read a file
var fs = require('fs');
var readline = require('readline');
var hello = hello1
var hel = hel;

//this creates a new file and saves it
// var filename = "file1.txt"
// fs.writeFile(filename, 'I love Node', function (error) {
//     if (error) {
//         console.error(error.message);
//     return;
//     }
//     console.log('File Save: ', filename);
// });

// "file2.txt" is for prompting error message
// var filename = "file1.txt"

// this reads the file
// fs.readFile(filename, function (error, buffer) {
//         if (error) {
//             console.error(error.message);
//         return;
//         }
//         console.log('File Data: ', buffer.toString().toUpperCase());
// });
// promblem is I can't prompt the user to enter a file name!

// DNS lookup
// const dns = require('dns');

// dns.lookup('yahoo.com', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });

//can't prompt or get error message




//Read and write
var filename = "file1.txt";
var filename2 = "result.txt";

fs.readFile(filename, function (error, buffer) {
    if (error) {
      console.log(error.message);
      return;
    }
    var contents = buffer.toString();
    var upper = contents.toUpperCase();

    fs.writeFile(filename2, upper, function (error) {
      if (error) {
            console.error(error.message);
        return;
      }
      console.log('File Save: ', filename2);
    });

    fs.readFile(filename2, function (error, buffer){
        if (error) {
            console.log(error.message);
            return;
        }
        console.log('File Data: ', buffer.toString());
    })
});
//can't trigger prompt

//Save a web page
//Need help

//Not sure what this is going!
// var request = require('request');
// var url = 'https://nodejs.org/en/';
// request.get(url, function (error, response, html) {
//   if (error) {
//     console.error(error.message);
//     return;
//   }
//   console.log(html);
// });