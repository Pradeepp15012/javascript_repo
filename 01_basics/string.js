/* In JavaScript, concatenation means joining 
 two or more strings together. You can 
 concatenate strings using: */

 const name = "pradeep"
 const repoCount = 50

 // console.log(name + repoCount + "value");
 // console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
 const gameName = new String('pradeep')

 // console.log(gameName[0]);
 // console.log(gameName.__proto__);
 

 // console.log(gameName.length);
 // console.log(gameName.toLowerCase());
 // console.log(gameName.charAt(3));
 // console.log(gameName.indexOf('e'));
 
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Pradeep    "
console.log(newStringOne);
console.log(newStringOne.trim());

/*In JavaScript, the trim() method is used to remove whitespace (spaces, tabs, newlines) from both the beginning and end of a string. */

const url = "https://pradeep.com/pradeep%20kumar"

console.log(url.replace("%20", "-"));

console.log(url.includes('sundar'));
