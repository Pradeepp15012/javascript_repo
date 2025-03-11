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

const userloggedIn = true

const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("Allow to buy course");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User: logged in");
    
}