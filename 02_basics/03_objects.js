//singleton
//obj. literals


const mysym = Symbol("key1")

const jsuser = {
    name : "Rishav",
    [mysym] : "mykey1", //only way to use mysym as key in objects
    "full name":"rishavnitian",
    age : "20",
    location : "patna",
    email : "rishavnit@gmail.com"
    
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]); //only way to access full name 
console.log(jsuser[mysym]);


jsuser.email = "rishav@chatpt.com" //= ke sath change kr skte hai
// Object.freeze(jsuser)
jsuser.email = "rishav@yahoo.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
}

jsuser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());



