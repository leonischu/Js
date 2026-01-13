function sayMyName(){

console.log("N");
console.log("i");
console.log("s");
}
// sayMyName();

// function add(num1,num2){

//     console.log(num1+num2)

// }


function add(num1,num2){

    let result = num1 + num2
    return result;
    

}


const result = add(3,4);
// console.log("Result:",result)

function loginUserMessage(username){
    if(username=== undefined){
        console.log("Please enter a username")
        return 
    }

    return `${username} just logged in`

}

// console.log(loginUserMessage("Nischal"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1)
{
    return num1
}

// console.log(calculateCartPrice(200,400,500))

const user = {
    username: "Nischal",
    price: 199
}
function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);


}
// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){

    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
