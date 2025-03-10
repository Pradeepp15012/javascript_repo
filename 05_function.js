function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    
}

// sayMyName()

/** jab user function ko define karta hai to jo bhi 
input leta hai use parameter kahte hai and jab user 
function ko call karate hai tb jo bhi input lete hai 
use argument kahte hai
 */
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(4, "7") // 47

// addTwoNumbers(4, null) // 4

// addTwoNumbers(4, 6)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log(result);
    return number1 + number2
}
const result = addTwoNumbers(4, 6)

// console.log("Result: ", result);

// function loginUserMessage(username = "sam"){
//     // if(username === undefined){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage(""));

// console.log(loginUserMessage("pradeep"));

/** Rest Operator and spread operator */
/* 1. Rest Operator (...) 
The rest operator collects multiple elements into a single array or object. */

/** 2. Spread Operator (...)
The spread operator expands an array or object into individual elements. */
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Pradeep",
    prices: 200 
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    
}

// handleobject(user)

handleobject({
    username: "sam",
    price: 499
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

