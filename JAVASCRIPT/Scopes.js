  





/*



Scope

// let name = 'pablo pandey'//global scope

// function pabloParked() {

// let name = 'pablo pandey' //local scope // }

//var vs let vs const

// if (x > 10) {

// const name = 'pablo pandey' //block scope

// }

//memory leakage

// for (var i = 0; i < 5; i++) {} //fix this

// console.log('i:', i);

//hoisting happens for all variables. ( var ,let ,const )

// Creation

















*/







// WHAT IS SCOPES //

//Scope. An important idea in programming is scope. Scope defines where 
//variables can be accessed . While some variables 
//can be accessed from anywhere within a program, 
//In JavaScript, objects and functions are also variables.
// Scope determines the accessibility of variables, objects,
// and functions from different parts of the code.




/*JavaScript has 3 types of scope:

Block scope
Function scope
Global scope




// GLOBAL SCOPE//

 In client-side JavaScript, 
//the global scope is generally the web page inside which all the code is 
//being executed.
//Global variables can be accessed and modified anywhere in the program
/*

In a browser environment, the global scope is controlled by the window object



block scope:

let and const.

These two keywords provide Block Scope in JavaScript.
Variables declared with the var keyword can NOT have block scope.
Variables declared inside { } block cannot be accessed from outside the block:

Example
{
  let x = 2;
}
// x is not defined;






local scope :

Local Scope
Variables declared within a JavaScript function, become LOCAL to the function.

Example
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName






Function Scope
JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.

They all have Function Scope:

function myFunction() {
  var carName = "Volvo";   // Function Scope
}
function myFunction() {
  let carName = "Volvo";   // Function Scope
}
function myFunction() {
  const carName = "Volvo";   // Function Scope
}




Global Scope
Variables declared Globally (outside any function) have Global Scope.

Global variables can be accessed from anywhere in a JavaScript program.

Variables declared with var, let and const are quite similar when declared outside a block.

They all have Global Scope:

var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope






Variable Scope 
Scope in JavaScript refers to the accessibility or visibility of variables. That is, which parts of a
 program have access to the variable or where the variable is visible.
Global scope
When you execute a script, the JavaScript engine creates a global execution context. It also assigns
 variables that you declare outside of functions to the global execution context. These variables are in 
 the global scope. They are also known as global variables.

Local scope
Variables that you declare inside a function are local to that function. They are called Local Variables 
and can’t be accessed in Global Scope.

Block scope
Variables that you declare inside a block {} using let or const are limited only to that block.

Remember:
Code that has a lot of changing values is unpredictable and hard to figure out bugs.
Immutability helps you keep track of changes done in code making it more solid.
let and const are better ways of declaring variables.
























*/































