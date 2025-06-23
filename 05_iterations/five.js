const coding = ["javascript","cpp","python","ruby","java"]
// coding.forEach( function (item) {
//     console.log(item);
// } )

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
} )

const mycoding = [
    {
        languaeName: "javascript",
        languaeFileName: "js"
    },
    {
        languaeName: "python",
        languaeFileName: "py"
    },
    {
        languaeName: "java",
        languaeFileName: "java"
    }
]
mycoding.forEach((item) => {
    // console.log(item.languaeFileName);
})