const user = {
    username: "Rishav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to my website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "RIS"
// user.welcomeMessage()

// console.log(this)



// function chai() {
//     let username =  "Rishav"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//    let username =  "Rishav"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//    let username =  "Rishav"
//     console.log(this);
// }
// chai()

// const add2 = (num1,num2) => (num1+num2)
// const add2 = (num1,num2) => num1+num2

const add2 = (num1,num2) => ({username: "Rishav"})

console.log(add2(2,1))
