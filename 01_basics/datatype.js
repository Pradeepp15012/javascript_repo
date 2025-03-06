"use struct"; // treat all JS code as never version

// alert( 3 + 3) // we are using nodejs not browser

let name = "Pradeep"
let age = 25
// let isLoggedIn = false

// Primitive data type
// number => 2 to power 53
// bigint 
// string  => ""
// boolean => true/false
// null => standelone value
// undefined => 
// symbol => uniwue

// Object

// console.log(typeof null); // null is a object
// console.log(typeof undefined);

// JavaScript is a dynamic language and not static

/* Call by value passes a copy of a variable to a
 function, while call by reference passes the 
 address of a variable to a function */

 // reference data type (non primitive)

 // Array, Objeects, Functions

//  const isLoggedIn = false
//  const outsideTemp = null
//  let userEmail;

//  const id = Symbol('123')
//  const anotherId = Symbol('123')

//  console.log(id === anotherId); // false
 
const heros = ["vinod", "bhushan", "prahlad"]

let myObj = {
    name: "pradeep",
    age: 25,

}

const myFunction = function(){
    console.log("Hello World");
    
}