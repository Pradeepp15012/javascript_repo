// for

/*for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for(let j = 0; j<= 10; j++){
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        
    }    
}*/

/*let myArray = ["flash", "iostream", "superman"]

console.log(myArray.length);
for(let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);
    
} */

// break and continue

/* for(let index = 0; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
    
    const element = Array[index];
} */


let index = 0

while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = ["flash", "iostream", "superman"]

let arr = 0
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1    
}

let score = 1
do{
    console.log(`Score is ${score}`);
    score++
}while(score <= 10);