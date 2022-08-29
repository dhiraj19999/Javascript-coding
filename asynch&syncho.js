

// WHAT IS ASYNCHRONUS PROGRAMING//

//Also known as nonblocking code, asynchronous programming provides opportunities 
//for a program to continue running other code while waiting for a long-running 
//task to complete. The time-consuming task is executed in the background while 
//the rest of the code continues to execute.

//async always returns promise//

// EXAMPLE OF ASYNCHRONUS//
//Data may take long a long time to submit to a database. With asynchronous
// programming, the user can move to another screen while the function continues 
//to execute. When a photo is loaded and sent on Instagram, the user does not have
// to stay on the same screen waiting for the photo to finish loading




// DIFFERNCE BET ASYCH AND SYNCHO//


//The differences between asynchronous and synchronous include: Async is 
//multi-thread, which means operations or programs can run in parallel. Sync is 
//single-thread, so only one operation or program will run at a time. Async is 
//non-blocking, which means it will send multiple requests to a server





// The Async Keyword:-
//We use the async keyword with a function to represent that the function is asynchronous. 
//The async function always returns a promise.

//Here is the syntax of async function is:

async function name(param1, param2, ...paramN) {
    // statements
}



//The await keyword:-
//The await keyword is used to wait for the asynchronous operation. 
//This keyword is used inside the async function. Here is the syntax to use await
// is:

let result = await promise;
//The await pauses the async function until the promise returns a result value. 


//When we want to call this function, we prepend await, and the calling code will

// stop until the promise is resolved or rejected. Here is another example:



//Benefits of using an async function:-
//Debugging using promises sometimes is very hard because the debugger will not 

//step over the asynchronous code. But the Async/await makes this very easy 
//because it is just like synchronous code to the compiler.
//As we can see from the example above, the code looks very simple compared to 
//the code using plain promises, with chaining and callback functions.
//Error handling is simpler in async functions.
//So, in this tutorial, we have learned about async and await keywords. 
//Async/await provides a nice, simplified way to write async code that is easy to
// read and maintain. 


//An async function is a function that is declared with the asynckeyword. 
//Async functions are the instances of AsyncFunction constructor, 
//and the await keyword is permitted within them.
//The async and await keywords enable the asynchronous, promise-based behavior 
//to be written cleaner.
 



console.log("This is tutorial 43");

async function harry(){
    console.log('Inside harry function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "harry";
}

console.log("Before calling harry")
let a = harry();
console.log("After calling harry")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")


// Browser provides some funcanality to js//
//  WHENEVER JS ENGINE ENCOUNTERS A PIECE OF CODE THAT WILL TAKE A LONG TIME 
// TO EXCUTE, IT HAND OVER IT'S EXCUATION TO BROWSER,  BROWSER NPW TAKE CARE OF
/// THAT TASK AND WHEN IT GET FINISHED, IT PINGS THE JS ENGIENE, THAT THE TASK IS
// DONE that's how js  engiene and browser work together to make js capble of 
// asynchronus programing


//Message Queue// 

//It's a one more data structure that Js to add next code to execute. 
//Such code are called tasks, since they need more time to execute. 
//Tasks are added to the queue whenever Js finds a function which will 
//take some time to execute.

//JavaScript runs a loop that looks for new messages/tasks on the message queue 
//and pushes them onto the call stack to be executed. that is event loop

//However, the event loop gives priority to the code currently on the call stack. 
//It pushes a new message from the Queue onto the stack after all the code in the 
//stack have been executed and the call stack is empty.
//Queue holds all the code that will require a longer time to excute
// Especially, network requests.