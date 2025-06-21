// falsy value => false,0,-0,bigint,0n,"", null, undefined,NaN
// truthy value => "0",'false'," ",[],{}, function(){}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined

//terniary operator
// condition ? true : false