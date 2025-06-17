// function addTwoNumber(number1 , number2){
//     console.log(number1+number2);   
// }

function addTwoNumber(number1 , number2){
    let result = number1+number2
    return result
    // return number1 + number2
    console.log("Rishav");
}

const result = addTwoNumber(4,6)

// console.log("result: ", result);

function loginusermessage(username = "Ris"){
    if(username === undefined){
        console.log("please enter a valid username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("rishav"))
console.log(loginusermessage());

