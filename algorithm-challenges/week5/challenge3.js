var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 0;

function cakeFunc(){
    cakeTypes.forEach(function(e){
        var cakeRatio = (e['value'] / e['weight'])
        e['ratio'] = cakeRatio;
    });
};

cakeFunc();
cakeTypes.sort(function(a, b){
    return a.ratio - b.ratio
});
console.log(cakeTypes);

while(capacity < 20){
    if(cakeTypes[0]['weight'] % 2 == 0 && cakeTypes[0]['ratio'] > cakeTypes[1]['ratio'] && cakeTypes[0]['ratio'] < cakeTypes[2]['ratio']){
        capacity += cakeTypes[0]['weight'];
    }
    else if (capacity == 18){
        break;
    }
    else if(cakeTypes[1]['weight'] % 7 == 0 && cakeTypes[1]['ratio'] > cakeTypes[0]['ratio'] && cakeTypes[1]['ratio'] > cakeTypes[2]['ratio']){
        capacity += cakeTypes[1]['weight'];
    }
    else if(cakeTypes[2]['weight'] % 3 == 0 && cakeTypes[2]['ratio'] > cakeTypes[1]['ratio'] && cakeTypes[2]['ratio'] > cakeTypes[0]['ratio']){
        capacity += cakeTypes[2]['weight'];
    }
    else {
        capacity += cakeTypes['weight'];
    }
    console.log(capacity);
} 
if(capacity > 20){
    
}





// class cakeType {
//     constructor(weight, value){
//         this.weight = weight;
//         this.value = value;
//     }
//     cakeTypes = [
//         {weight: 7, value: 160},
//         {weight: 3, value: 90},
//         {weight: 2, value: 15},
//     ];
// }