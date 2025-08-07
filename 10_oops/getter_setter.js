class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    get password(){
        return `${this._password}rishav`
    }
    set password(value){
        this._password = value
    }
}
const rishav = new User("rishav@happy.com","5644")
console.log(rishav.password);
console.log(rishav.email);

