//primitive
//7types : string,number,boolean,null,undefined,symbol,BigInt
//js is dynamically typed

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);
const Name = null


//Refernce (non-primitive) : Array ,Objects, Functions

const heros = ["shaktiman" , "naagraj", "doga"]
let myobj = {
    name:"hitesh",
    aage: 22,
}
// const myfunction = function(){
//     console.log("Hello World"); 
// }
// console.log(typeof Name); => this is unique point this lecture



//**********************************************************************************


//stack(primitive) , Heap(Non-Primitive)


//stack
// let myYoutubename = "rishav0709"
// let anothername = myYoutubename
// anothername = "chai aur code"
// console.log(myYoutubename);
// console.log(anothername);


//Heap
let userone = {
    email: "user@google.com",
    UPI: "user@ybl"
}
let userTwo = userone
userTwo.email = "rishav@oole.com"

console.log(userone.email);
console.log(userTwo.email);
