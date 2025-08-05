// let myName = "Rishav       "
// console.log(myName.truelength);


// let myheros = ["thor", "spiderman"]

// let heropower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }

// }
// Object.prototype.rishav = function(){
//     console.log(`rishav is present in all objects`);
    
// }
// Array.prototype.heyRishav = function(){
//     console.log(`Rishav says Hello`);
    
// }
// // heropower.rishav()
// myheros.rishav()
// myheros.heyRishav()
// // heropower.rishav()

// // inheritence
// Object.setPrototypeOf(teachingsupport, teeacher)

let anotherusername= "Nit patna     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherusername.trueLength()
"rishav".trueLength()