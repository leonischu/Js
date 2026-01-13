// const myArr = [0,1,2,3,4,5,true,"hitesh"]

// const myHeros =["ironman","spider"]

// const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1])



// Array methods



// myArr. push(6)
// myArr.push(7)
// myArr.pop


// myArr.unshift(9)

// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr)

//slice, splice

// console.log("A",myArr)

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr)

// const myn2 = myArr.splice(1,3)
// console.log("C", myArr)
// console.log(myn2);


const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]


// marvel_heros.push(dc)
// console.log(marvel_heros)

const all_new_heros = [...marvel_heros,...dc]

// console.log(all_new_heros)

// const  another = [1,2,3[4,5,6[7,8,9]]]

// const real_another_array = another.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Nischal"))
console.log(Array.from("Nischal"))



let score1 = 100
let socre2 =200 
let score3 = 300 


console.log(Array.of(score1,socre2,score3));