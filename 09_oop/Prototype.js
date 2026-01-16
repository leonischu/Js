let myHeros  = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.nischal = function()
{
    console.log(`Nischal is present in all objects`);
}

Array.prototype.hey = function(){
    console.log(`Hey says hello`);
}


// heroPower.nischal()
// myHeros.nischal()
// myHeros.hey()
// heroPower.hey()


// Inheritance

// const Teacher = {
//     makeVideo : true
// }
// const TeachingSupport = {
//     isAvailable: false
// }
// const TASupport ={
//     makeAssignment : 'Js assignment',
//     fullTime :true,
//     __proto__: TeachingSupport
// }
// Teacher.__proto__ = User 

// modern syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "Nischal    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"nischallll".trueLength()