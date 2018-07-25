//Inheritance
var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black',
    showInfo: function(){
        console.log(`Hello ${this.firstName} ${this.lastName} your eye color is ${this.eyeColor} and your hair color is ${this.hairColor}`);
    },
    hello: function(){
        console.log(`${this.firstName} ${this.lastName} ${this.eyeColor} ${this.hairColor}`);
    }
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' 
};
daughter.__proto__= mom;
daughter.hello();
mom.showInfo();
daughter.showInfo();

//Person & These thises & These thises 2
class Person{
    constructor(name, friends){
    this.name = name; 
    this.friends = []; 
    }
    addFriend(friend){
        this.friends.push(friend);
    }
    createGreeting(other){
        this.friends.push('Yo ' + other.name + '! From ' + this.name + '.');
        return 'Yo ' + other.name + '! From ' + this.name + '.';
    }
    greet(other){
        console.log(this.createGreeting(other));
    }
    lazyGreet(other){
        setTimeout(() =>{
            console.log(this.createGreeting(other));
        }, 2000);
    }
    createGreetingsForFriends(other){
        this.friends.map(function(friends)
        {return friends
        });
        return this.friends.map(function(friends)
        {return friends
        });

    }
} 

var me = new Person('Travis');
var you = new Person('class');
me.lazyGreet(you);
var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka); 
alfie.addFriend(henrique);
alfie.createGreeting(anushka);
var array = alfie.createGreetingsForFriends();
console.log(array);

