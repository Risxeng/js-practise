//for of
// ["","",""]
// [{},{},{}]

const arr = ["rishav","suresh","mukesh"]
for (const string of arr) {
    // console.log(string); 
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


//map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);
for (const [key,value] of map) {
    // console.log(key, ':-', value);
    
}

const myobj = {
    'game1': 'BGMI',
    'game2' : 'FREEFIRE'
}
// for (const [key,value] of myobj) {
//     console.log(key, ':-', value);
// }
