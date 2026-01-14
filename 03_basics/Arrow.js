const user = {
    username: "nischal",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this) 


// function chai(){
    // console.log(this)
    // let username = "nischal"
    // console.log(this.username); this does not work for function it only works for object .it return current context 
// }
// chai()


const chai = ()=>{
    let username = "Nischal"
    console.log(this);

}
// chai()




// define function impicitly

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)

// object return garna ko lagi 
const addTwo = (num1 , num2) => ({username: "Nischal"})

console.log(addTwo(3,4))

