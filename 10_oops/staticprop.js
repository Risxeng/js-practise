class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }
    static createId(){    //---> here we use ststic for protecting it by not using by other new user
        return `234`
    }
}
const rishav = new user("rishav")
// console.log(rishav.logMe());


class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("samsung", "i@phone.com")
iphone.logMe();

