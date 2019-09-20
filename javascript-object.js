//1.Syntax
    //Object() constructor
    var d = new Object();

    //Using Object.create()
    var a = Object.create(null);

    //Using bracket's syntactig sugar
    var b = {};

    //Using a function constructor
    var Obj = function(name){
        this.name = name;
    }
    var c = new Obj("hello");
    console.log("the c's name is "+ c.name);
    
    //Using the function constructor + prototype
    function myObj(){};
    myObj.prototype.name = "Bye";
    var k = new myObj();
    console.log("the k's name is: " + k.name);

    //Using ES6 class syntax
    class myObject{
        constructor(name){
            this.name = name;
        }
    }
    var e = new myObject("mingjing");
    console.log("e is "+ e.name);

    //Singleton pattern
    var l = new function(){
        this.name = "lalala";
    }
    console.log("l's name is "+ l.name);

//2.Me
const me = {
    name: "Krigstyn",
    age: 42,
    email: "kristyn@foo.bar"
}

console.log(me.name);

me["age"] = "51";
console.log(me.age);

// me["place of residence"] = "1234 st NY";
me.place = "london";
console.log(me);

// delete me["place of residence"];
// console.log(me);


//3.Slimer
const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something",
    introduce :function(){
        console.log("My name is "+ this.name);
    },
    favoriateColor :function(){
        console.log("My favoriate color is "+ this.color);
    }
 };

console.log(monster.name);

monster.type = "creature";
console.log(monster);

monster.age = "6";
console.log(monster);

monster.introduce();
monster.favoriateColor();


//4. Ogres
const ogre = {
    name: "gladiator",
    hitpoints: 50,
    ogreAttack : function(){
        return Math.floor(Math.random()*11);
    }
}

const adventurer ={
    name: "mingjing",
    hitpoints: 50,
    adventurerAttack : function(){
        return 6;
    }
}

function game(){
    console.log(ogre.name + " is on the stage!");
    console.log("ogre hitpoints now is: " + ogre.hitpoints);

    console.log(adventurer.name + " is on the stage!");
    console.log("adventurer hitpoints now is: " + adventurer.hitpoints);

    while(ogre.hitpoints > 0 && adventurer.hitpoints > 0){
        let ogreAttackPoints = ogre.ogreAttack();
        console.log("ogre attack "+ ogreAttackPoints + " points on adventurer!");
        adventurer.hitpoints = adventurer.hitpoints - ogreAttackPoints;
        
        if(adventurer.hitpoints <= 0){
            console.log("adenturer is lose!");
            break;
        }
        else{
            console.log("adventurer is "+ adventurer.hitpoints + " points now.");
        }

        let adventurerAttackPoints = adventurer.adventurerAttack();
        console.log("adventurer attack "+ adventurerAttackPoints + " points on ogre!");
        ogre.hitpoints = ogre.hitpoints - adventurerAttackPoints;

        if(ogre.hitpoints <= 0){
            console.log("ogre is lose!");
            break;
        }
        else{
            console.log("ogre is "+ ogre.hitpoints + " points now.");
        }
    }   
}

game();

