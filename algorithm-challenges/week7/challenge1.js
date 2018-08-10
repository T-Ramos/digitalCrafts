var array = [-3, -2, -1, 0, 1, 2, 3];
pair = 0;
for(i of array){
    if(i === 0){
        pair -=1;
    }
   for(x of array){
       if(i + x === 0){
           pair += 1;
       }
   }
}

console.log(pair/2);
   