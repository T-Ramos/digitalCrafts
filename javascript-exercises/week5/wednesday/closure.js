//counter 1
function counter(){
    var count = 0;
    var actuallyCount = function (){
        count ++;
        console.log(count);
    }
    return actuallyCount;
};

var count1 = counter(4);
var count2 = counter();
count1();
count1();
count2();
count2();
count1();

//counter 2
function counter(x){
    var count = 0;
    var actuallyCount = function(){
        x ++;
        console.log(x);
    }
    return actuallyCount;
};

var count1 = counter(4);
count1();
count1();

//counter 3
function counter(y){
    var count = y;
    var actuallyCount = function(x){
        count += x;
    }
    return{
        increment: function counter(){
            actuallyCount(1);
            console.log(count);
        },
        decrement: function counter(){
            actuallyCount(-1);
            console.log(count);
        }
    }
    return actuallyCount;
}
var count = counter(4);
count.increment();
count.increment();
count.increment();
count.decrement();
