/*
Hoisting
Hoisting is JavaScript's default behavior of finding variables and function declarations before 
actually executing the program

It doesn't care about variable values. All it wants to know what variables are present in a program.

Execution Context
Execution context (EC) is defined as the environment in which the JavaScript code is executed. By 
environment, I mean what variables JavaScript code has access to at a particular time.

Execution context changes when Js starts running a function, that context is called Functional 
Execution Context. Otherwise, its Global Execution Context by default.

 Execution Stack
Execution stack, also known as “calling stack” in other programming languages, 
is a stack with a LIFO (Last in, First out) structure, which is used to store all the
 execution context created during the code execution.

When the JavaScript engine first encounters your script, it creates a global execution
 context and pushes it to the current execution stack.

Whenever the engine finds a function invocation, it creates a new execution context for
 that function and pushes it to the top of the stack.




let name  //  intialize or declare;


hosting happen for all varibles (let, var , const)

but for let and const we can't acces the hosting 
but for var we can

console.log(g) ==>  shows undefined;
var g="hello"

console.log(x) ==>  shows cannot acces x before intilisation;
var x="hello"


 hosting It means Js can access all variables 
and function even before they were 
initialized.



there are 2 phasese in hosting 

MEMORY or VARIABLE CREATION PHASE
● Here HOISTING happens
● MEMORY IS ALLOCATED for variables
● Here value of variables is UNDEFINED



CODE EXECUTION PHASE
Here variable values are assigned
Here code is executed







*/















