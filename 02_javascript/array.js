// const myArr = [0, 1, 2, 3, 4, 5, 6]

// console.log(myArr[8]); // undefined

// console.log(1); // 1

// const myHeros = ["GulshanKumar", "Bhushan", "Vinod", "vikash"]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr);

// myArr.push(8)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);



//slice, splice
/* slice() extracts elements into a new 
  array without modifying the original.
   splice() changes the contents of the 
   original array */

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.slice(1, 4)
// console.log("c", myArr);

// console.log(myn2);

 
const marvel_heros = ["thoz", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("pradeep")); // false

console.log(Array.from("pradeep"));

console.log(Array({name: "Pradeep"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

