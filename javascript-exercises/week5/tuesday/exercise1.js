function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
};

var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

sonny.greet(jordan);
jordan.greet(sonny);

console.log(sonny.email, sonny.phone);
console.log(jordan.email, jordan.phone);

//Card Constructor
function Card(point, suit){
    this.point = point;
    this.suit = suit;
}


var myCard = new Card(5, 'diamonds');

console.log(myCard.point);
console.log(myCard.suit);

Card.prototype.getImageUrl = function(){
    return(`images/${myCard.point}_of_${myCard.suit}.png`);
}
console.log(myCard.getImageUrl());

//hand constructor
function Hand(){
    this.myCardsInHand = [];
}

Hand.prototype.addCard = function(card){
    this.myCardsInHand.push(card);
}

Hand.prototype.getPoints = function(){
    var self = this;
    var points = self.myCardsInHand.map(function(e){
        return e.point;
    })
    // points.reduce(function(a, b){
    //     return a + b;
    // }, 0)
    // console.log(points);
    let count = 0;
    points.forEach(function(index){
        count = count + index;
    })
    console.log(count);
}
var myHand = new Hand();
myHand.addCard(new Card(5, 'diamond'));
myHand.addCard(new Card(13, 'spades'));
myHand.getPoints();