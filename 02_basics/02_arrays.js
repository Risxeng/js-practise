const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","Batman"]


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros = [...dc_heros, ...marvel_heros]
// console.log(all_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Rishav"));
console.log(Array.from("Rishav"));
console.log(Array.from({name: "Rishav"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
