// var c = 300
let a =300
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER:", a);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Rishav"
    
    function two() {
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
    console.log(username);
    
}
// one()


if(true){
    const username = "Rishav "
    if(username === "Rishav "){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);
// *****************************intersecting ********************************
console.log(addone(4))

function addone(num){
    return num + 1
}



const addtwo = function(num){
    return num + 2
}
addtwo(9)
console.log(addtwo(9))
