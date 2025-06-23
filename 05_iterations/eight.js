//reduce method
const mynums = [1,2,3,4,5,6,7,8,9,10]

// const mytotal = mynums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and current value : ${currval}`);
//     return acc+ currval
// }, 0)

const mytotal = mynums.reduce((acc,currval) => acc+currval , 0)
console.log(mytotal);

const shoppingcart = [
    {
        itemname : 'jscourse',
        price : 3999
    },
    {
        itemname : 'python',
        price : 6999
    },
    {
        itemname : 'mobile development',
        price : 5999
    },
    {
        itemname : 'DSA',
        price : 9999
    },
]
const totaltopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(totaltopay);

