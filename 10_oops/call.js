function SerUsername(username){
    this.username = username
    console.log("called");
    
}
function createUser(username,email,password){
   SerUsername.call(this,username)
    this.email = email
    this.password = password
}
const chai = new createUser("chai","chai@fb.com","464")
console.log(chai);
