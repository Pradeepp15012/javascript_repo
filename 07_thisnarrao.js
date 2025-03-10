const user = {
    username: "Pradeep",
    price: 999,

    // this key is use for create current context
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Pradeep"
//     console.log(this.username);
    
// }

// chai()

// Arrow function

const chai = () =>{
    let username = "Pradeep"
    console.log(this.username);
    
}
chai()
