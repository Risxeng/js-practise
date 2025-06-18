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
// console.log(loginusermessage());


function calculateprice(val1, val2, ...num1){  //... => spread operator and rest operator
    return num1
}
// console.log(calculateprice(200,400,300,2000,49530))

const user = {
    username: "Rishav",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} amd the price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "Ris",
    price: 299
})

const mynewarray = [200,400,600,100,910]

function returnsecondvalue(getArray){
    return getArray[1]
}
// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,400,600,100,910]));

