// for of

/* const arr = [1, 2, 3, 4, 5]

for(const num of arr)
{
    // console.log(num);
    
}
const greetings = "hello world"
for(const greet of greetings){
    // console.log(`Each chat is ${greet}`);
    
}
// map unique value ke liye jane jate hai
const map = new Map()
map.set('IN', "india")
map.set('USA', "United States of America")
map.set('FR', "France")*/

// console.log(map);

/* for(const key of map){
    console.log(key);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': "Spiderman"
} */
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
    
// }


/* const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    // if(Object.hasOwnProperty.call(Object, key)){
    //     const element = Object[key];
    // }
    // console.log(key);
    // console.log(programming[key]);
    

}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){
    console.log(map[key]);
    
}  */

 const coding = ["js", "ruby", "java", "python", "cpp"]

/* coding.forEach((item) =>{
    console.log(item);
    
}) */

/* function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe) */

/* coding.forEach((item, index, arr) =>{
    console.log(item, index, arr);
    
}) */

const myCoding = [

    {
        languageName: "javascript",
        languageFileName: "js"
    
    },
    {
        languageName: "java",
        languageFileName: "java"
    
    },
    {
        languageName: "python",
        languageFileName: "py"
    
    },


]

myCoding.forEach((item) =>{
    console.log(item.languageFileName);
    
})