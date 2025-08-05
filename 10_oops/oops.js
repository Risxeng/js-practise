// const user = {
//     username: "rishav",
//     logincount: 8,
//     singnedIn: true,

//     getUserDetails: function(){
//         // console.log("got the user details from the databases");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
        
        
        
//     }

// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function user(username, logincount, isloggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isloggedIn = isloggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userone = new user("rishav",12,true)
const usertwo = new user("RISHAV",11,false)
console.log(userone.constructor);
// console.log(usertwo);



