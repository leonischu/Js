// for of 

const arr = [1,2,3,4,5]
for (const num of arr) {

    // console.log(num);
    
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

// const map = new Map()
// map.set('Nep', "Nepal");
// map.set('USA',"United State of America");
// map.set('Fr',"France");

// console.log(map);
// for (const [key,value] of map) {
    // console.log(key, ':-', value);
    
// }
// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }
// for (const [key,value ] of myObject) {
//     console.log(key, ':-', value)
// }

const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb: 'ruby',
    swift:'swift by apple'
}
for(const key in myObject){

    //  console.log(myObject[key]);

}



const programming = ["js","rb","py","java","cpp"]

for (const key in programming)
{
    // console.log(programming[key]);

}


// const map = new Map()
// map.set('Nep', "Nepal");
// map.set('USA',"United State of America");
// map.set('Fr',"France")

// for(const key in map){
//     console.log(key);
// }


const coding = [ "js" , "ruby", "java","python","cpp"]

// coding.forEach( function (val){

// console.log(val);


// })
// coding.forEach((i) => {
// console.log(i);
// })

coding.forEach((item,index,arr) => {

 console.log(item,index,arr);
})