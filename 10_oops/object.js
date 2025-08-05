function multiply(num){
    return num*5
}

multiply.power = 2
console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
const chai = new createUser("chai",250)
const tea = createUser("tea",500)

  chai.printMe()
 