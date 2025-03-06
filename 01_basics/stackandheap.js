// stack memory is use for primitive data type
// when use stack mrmory then user ko variable ka copy milta hai

// Heap memory is use for non primitive data type
// when use heap memory then user ko reference milta hai
// original variable ka

/*The Stack is used for static memory allocation,
 primarily for storing primitive types and
  function calls. It's a simple, last-in, 
  first-out (LIFO) structure, making it very 
  fast to access. Heap: The Heap is used for 
  dynamic memory allocation, where objects and 
  arrays (non-primitive types) are stored.*/

  let myname = "pradeepkumar"

  let anothername = myname;

  anothername = "pradeep"
  console.log(anothername);
  console.log(myname);
  
  let usesrOne = {
    email: "pradeepp30956@gmail.com",
    upi: "pradeep@ybl"
  }

  let userTwo = usesrOne

  userTwo.email = "pradeep@google.com"

  console.log(usesrOne.email);
  console.log(userTwo.email);
  
  