// singleton 
//object.Create()
//object literals 
/*

const mySym = Symbol("key1")




const JsUser = {

name:"Nischal",
age :18,
[mySym] : "mykey1",
location : "Nepal",
email: "Nischal@gmail.com",
isLoggedIn:false,
lastLofinDays : ["Monday","Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])


JsUser.email = "nischal@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "Nischal@yahoo.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}


JsUser.greetingTwo= function(){
    console.log(`Hello Js user,${this.name}`);
}



console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
*/

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email :"some@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Nischal",
            lastname:"Neupane"
        }
    }

}
// console.log(regularUser.fullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}

// const obj3 =Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.entries (tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))