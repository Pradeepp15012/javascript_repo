let score = "44asbd";
score = null;
score = true;
score = undefined;

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
// change datatype 
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "44" => 44
// "44asdb" => NaN(Not a Number)
// true => 1; false => 0

let isLoggedIn  = 1

isLoggedIn = "Pradeep"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// 1 => true; 0 => false;
// "" => false
// "Pradeep" => true;

/* Cahnge strng to Number */ 
let someNumber = 55

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


/*Operations */ 

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(3-2);
// console.log(2*2);
// console.log(4/2);
// console.log(7%3);

let str1 = "Hello"
let str2 = " Pradeep"
 
let str3 = str1 + str2

// console.log(str3);

// console.log(+true);
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
