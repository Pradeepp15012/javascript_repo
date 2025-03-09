/* The Object type represents one of JavaScript's data 
 types. It is used to store various keyed
  collections and more complex entities. Objects 
  can be created using the Object() constructor or 
the object initializer / literal syntax. */

/* singleton = Singleton is a design pattern that
 tells us that we can create only one instance of 
 a class and that instance can be accessed globally. */

 // constructor se singleton banta hai
// object.create
 // object literals

const mySym = Symbol("key1")

 const JsUser = {
    // define keys and values
    name: "pradeep", 
    "full name": "Pradeep Kumar",
    [mySym]: "mykey1",
    age: 25,
    location: "Delhi",
    email: "pradeepp@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
 } 

//  console.log(JsUser.email);
//  console.log(JsUser["email"]);
//  console.log(JsUser["full name"]);
 
//  console.log(JsUser[mySym]);
 
 // change value and object freez
 JsUser.email = "pradeeppp@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "pradeepp@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
