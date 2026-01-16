// fetch('https://smtg.com').then().catch.finally()

const promiseOne = new Promise((resolve, reject) => {
    //Do an async task 
    //db calls, cruptograph, n/w 
    
    setTimeout(function() {
        console.log('Async task is complete');
        resolve() //esle then function lai resolve sanga connect garcha // .then() has connection with resolve 

    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})


new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("async task two ");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})




 const promiseThree =  new Promise((resolve, reject) => {
    
    setTimeout(function(){

        resolve({
            username: "Nischal",
            email:"Nischal@gmail.com"

        })

    },1000)
 })
 promiseThree.then(function(user){

console.log(user);

 })



 const promiseFour = new Promise((resolve, reject) => {
    
    setTimeout(()=>{


        let error = true
        if(!error){
            resolve({
                username: "Nischal",
                password: "123"
            })
        }
        else{
            reject('Error:smtg went wrong')
        }

    },1000)
 })
  promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
 }).then((username) =>
{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let error = true
        if(!error){
            resolve({
                username: "javascript",
                password: "123"
            })
        }else{
            reject('Error: JS went wrong')
        }

    },1000)
});


async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()


// async  function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);
        
//     }
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    

})
.catch((error) => console.log(error))