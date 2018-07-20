//positive numbers
var arr = [1, 2, -3, -4, 5, 6];

var newArray = [];

arr.forEach(function(element){
    if(element > 0){
        newArray.push(element);
    }
})
console.log(newArray);

//even numbers
var arr2 = [1, 2, 3, 4, 5, 6];

var newArray2 = [];

arr2.forEach(function(elements){
    if(elements % 2 == 0){
        newArray2.push(elements);
    }
})
console.log(newArray2);

//square the numbers
var arr3 = [1, 2, 3, 4];

var newArray3 = arr3.map(function(element){
    return element * element;
})

console.log(newArray3);

//cities 1
var arr4 = [ { name: 'Los Angeles', temperature: 60.0}, { name: 'Atlanta', temperature: 52.0 }, { name: 'Detroit', temperature: 48.0 }, { name: 'New York', temperature: 80.0 } ];

var newArray4 = arr4.filter(function(element){
    if (element.temperature < 70.0){
        return element;
    }
})
console.log(newArray4);

//cities 2
var newArray5 = arr4.map(function(element){
    return element['name'];
})
console.log(newArray5);

//Good Job!
var arr5 = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

var newArray6 = arr5.map(function(element){
    return 'Good Job, ' + element + '!';
})
console.log(newArray6);

//sort an array
console.log(arr5.sort());

//sort an array, 2
var newArray6 = arr5.sort(function(a, b){
    return a.length - b.length;
})
console.log(newArray6);

//sort an array, 3
var arr7 = [ [1, 3, 4], [2, 4, 6, 8], [3, 6] ];

var newArray7 = arr7.map(function(element){
    var sum = 0;
    for (i = 0; i < element.length; i++){
        sum += element[i];
    }
    return sum;
}) 
console.log(newArray7.sort(function(a, b){
    return b - a;
}));

//3 times
function fun(){
    console.log("Hello World")
};

function call3Times(fun) { fun(); fun(); fun(); };

call3Times(fun);

//n times
function funner(){
    console.log("Hello World")
};

function callNTimes(times, funner) {
    i = 0;
    for (i = 0; i < times; i++){
        funner();
    }
}
callNTimes(5, funner);

//sum an array
var array4 = [1, 2, 3];

var sum = array4.reduce(function(a, b){
    return a + b;
})

console.log(sum);

//Acronym
var array5 = ["hello", "pizza", "sushi"];

var acronym = array5.reduce(function(a, b){
    return a[0] + b[0];
})

console.log(acronym);