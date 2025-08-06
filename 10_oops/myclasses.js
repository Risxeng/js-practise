//es6 version of js

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changedUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai","chai@gmail.com","1243")
// console.log(chai.encryptPassword());
// console.log(chai.changedUsername());


//---> in this we use user as a class in which we 
// use constructor and then many other function which get the values from consturctor

// behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`

}
const chai = new User("chai","chai@gmail.com","1243")
console.log(chai.encryptPassword());


// -----> in this we use user as a function aand then out of 
// the function we take the attribute by calling it by prototype