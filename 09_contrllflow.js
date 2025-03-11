// const isUserloggedIn = true
// const temp = 41


// if(temp === 50){
//     console.log("less than 50");
    
// }else {

//     console.log("temprature is greater than 50");
// }

// console.log("Execute");


// const score = 200
// if(score > 200){
//     let power = "fly"
//     console.log(`user power: ${power}`);
    
// }

// console.log(`User power: ${power}`);


/* const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

if(balance < 500){
    console.log("less than");
    
} else if (balance < 750){
    console.log("less than 750");
    
} else if (balance < 900){
    console.log("less than 750");
    
}
else{
    console.log("less than 1200");
    
} */

    /** const userloggedIn = true

const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("Allow to buy course");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User: logged in");
    
} */

    
// switch (key){
//     case value:

//         break;
//     default:
//         break;

// }

/* const month = 3

switch(month){
    case 1:
        console.log("january");
        
        break;

    case 2:
        console.log("february");
        break;
    
    case 3:
        console.log("March");
        break;

    case 4: 
        console.log("April");
        break;
        
        
    
    default:
        console.log("default case match");
        
        break;
}*/

const usesrEmail = "pradeep.ai"

if(usesrEmail) {
    console.log("Got user email");
    
}
else {
    console.log("Don't have user email");
    
}

// falsy value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truethy values
// "0", 'false', " ", [], {}, function(){}

// if(usesrEmail.length === 0){
//     console.log("Array is empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
    
// }

// Nullish coalescing operator (??); null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15

console.log(val1);


// Ternaiary operator
// condition ? true : false

