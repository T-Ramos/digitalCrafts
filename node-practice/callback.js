// var students = ['Melissa', 'Tracy', 'Matt', 'Eric', 'Travis', 'Sam', 'Keith']

// students.forEach((index) =>{
//     console.log(index);
// })

// function add(x, y, callback){
//     var result = x + y;
//     callback(result);

// }

// add(2, 3, function(num){
//     console.log(num);
// });

// function add (x, y, callback) {
//     setTimeout(function () {
//     var result = x + y;
//     callback(result);
//     }, 3000);
// }
// add(1, 2, function (r) { 
//     console.log(r); 
// });

// function add (x, y, callback) {
//     var result = x + y;
//     callback(result);
// }
// function multiply (x, y, callback) {
//     var result = x * y;
//     callback(result);
// }
// add(1, 2, function (result) {
//     multiply(result, 3, function (final_result) {
//     console.log(final_result);
//     });
// });

//first one plus a setTimeout function
function add(x, y, callback){
   setTimeout(function(){
     var result = x + y;
    callback(result);
}, 1000)
}
add(1, 2, function(result){
    console.log(result);
})

//second one
function subtract(x, y, callback){
    var results = x - y;
    callback(results);
}
subtract(4, 3, function(results){
    console.log(results);
})

//third one
function greeting(person, callback){
    var hello = 'Hola, ' + person + '!';
    callback(hello);
}
greeting('Travis', function(hello){
    console.log(hello);
})

//fourth one
function product(numbers, callback){
    var numb = numbers.reduce(function(a, b){
        return a * b;
    })
    callback(numb);
}
product([3, 2], function(numb){
    console.log(numb);
})