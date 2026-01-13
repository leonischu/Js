const name = "Nischal"
const count = 50
//string interpolation use ``
console.log(`Hello my name is ${name} and my count is ${count}`);
const gameName = new String("nisch-al");
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)

console.log(newString);
const another = gameName.slice(-8,2)
console.log(another)
// trim is used to trim the space 

const url = "https://nischal.com/nischal%20neupane"
console.log(url.replace('%20','-'))

console.log(url.includes('nisc'));

console.log(gameName.split('-'))
