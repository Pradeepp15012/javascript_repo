const account_Id = 16784232;
let account_Email = "preadeepp30956@gmail.com";
var accountPassword = "123456";
account_City = "Delhi"

// account_Id = 2; // constent never changable

/*
Prefer not to use var 
because of issue in block scope and functional scope


Alwaus use let and const variable 
*/

/* when js variable not assign value then always print undefined value*/ 
let accountState;
account_Email = "pkumarray62@gmail.com";
accountPassword = "1234567889";
account_City = "Banglore";

console.log(account_Id);

console.table([account_Id, account_Email, accountPassword, account_City, accountState]);
