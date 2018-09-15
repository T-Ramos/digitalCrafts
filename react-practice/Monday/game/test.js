// function fizzbuzz(n){
//    for(let i=1; i<=n; i++){
//     if(i % 3 === 0&& i % 5 === 0){
//         console.log('fizzbuzz');
        
//     }
//     else if (i % 3 === 0){
//         console.log('fizz');
       
//     }
//     else if(i % 5 === 0){
//         console.log('buzz');
        
//     }
//     else{
//         console.log(i);
//     }
//     }
// }

// fizzbuzz(10);


// function chunk(array, size){
//     const chunked = [];
//     let index = 0;
//     while(index < array.length){
//         chunked.push(array.slice(index, index + size))
//         index += size;
//     }
//     return chunked;
// }
// console.log(chunk([1,2, 3, 4, 4, 5, 6, 6, 78, 6, 5], 3))





// let num = [10, 20, 30];
// for (let value of num) {
//   value += 1;
//   console.log(value);
// }

// const myString =  "Digital Crafts"; 
// const myCharMap = {};
// // let max = 0;
// // let maxChar = '';
// for (let n of myString){
//     if(!myCharMap[n]){
//         myCharMap[n] = 1;
//     } else{
//         myCharMap[n]++;
//     }
// }
// console.log(myCharMap);

// let obj = {
//     a: 1, 
//     b: 1, 
//     c: 1
// }
// console.log(Object.keys(obj));
// console.log(Object.keys(obj).length);

// function buildCharMap(str){
//     let charMap = {}
//     for( let char of str.replace(/[^\w]/g, "").toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     console.log(charMap);
// }

// buildCharMap('HELLO!!!!');


// need help with this
// function anagrams(stringA, stringB){
//     let aCharMap = buildCharMap(stringA);
//     let bCharMap = buildCharMap(stringB);
//     if(Object.keys(aCharMap) !==  Object.keys(bCharMap)){
//         return false;
//     }
//     //iterate over one of the maps
//     for (let char in aCharMap){
//         if (aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }
// }

// anagrams('hello world', 'noway world');


// function oddEven(array){
//     let even = [];
//     let  odd = [];
//     for(i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             even.push(array[i]);
//         }
//         else{
//             odd.push(array[i]);
//         }
//     }
//     console.log(even);
//     console.log(odd);
// }

// oddEven([1, 2, 3, 4, 5, 6, 7, 8]);
