/*



when an action is dispatched, or in other words, when we invoke dispatch and pass in an action object,
 the dispatch function calls our reducer and passes in the current state and the action object!

What is Redux?

Redux is an open-source JavaScript library for managing and centralizing application state. 
It is most commonly used with libraries such as React or Angular for building user interfaces.
 Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.



What are actions?

actions are plain JavaScript object that must have a type attribute to indicate the type of action performed.
It carries a payload of information from your application to store




what are action creators?
Action creators are the functions that encapsulate the process of creation of an action object. 
These functions simply return a plain Js object which is an action. 
It promotes writing clean code and helps to achieve reusability.




what is dispatcher?


dispatch() is the method used to dispatch actions and trigger state changes to the store
The dispatch function accepts an object that represents the type of action we want to execute when
 it is called. Basically, it sends the type of action to the reducer function to perform its job, which, 
 of course, is updating the state.


what is reducer?

Reducers are functions that take the current state and an action as arguments, and return a new state result. 
In other words, (state, action) => newState





What is pure function?

Pure functions are functions that don't produce side effects and, when called with the same input parameters, 
will always return the same output.

A pure function should always return the same value given the same input, 
irrespective of the number of times it’s called.

function multiply(a, b) {
  return a * b;
}

multiply(2, 3); // returns 6
multiply(2, 3); // returns 6
multiply(2, 3); // returns 6


let count = 0;

function increment() {
  count++;
  console.log(count);
}

increment(); // Logs 1
increment(); // Logs 2
increment(); // Logs 3
The increment function in this example has the side effect of modifying the 
count variable outside its scope. It also logs to the console.




function increment(count) {
  return count + 1;
}

increment(1); // returns 2
increment(1); // returns 2
increment(1); // returns 2
The version of the increment function in the example above has no side effects as it does not modify any 
external variable or log any value. Additionally, no matter how many times you call it, it returns the same
Pure functions are easy to test as their input/output behavior is well-defined. Also, pure functions do not 
depend on external state or side effects value for the same input. Therefore, it's a pure function.
Because pure functions always produce the same output for the same input and produce no side effects, you
 can easily memoize them.



 Why do dispatchers take only actions which are objects?

 becuse  distach first of all dispatches the action and if action which are  object then we can
 pass type and payload  
 it helps to reducer to identify which type of action to be peroform and what changes have to make
 in state if action misses  objects tehn we can't able to pass type and payload
 so reducer didn't able to update the state thats why 
 dispatchers take only actions which are objects


What are types in actions why do we need them?

a type is a  attribute to indicate the type of action performed.
Direct manipulation of the store. UPDATE_RESOURCES and DELETE_RESOURCES allow you to synchronously 
modify the store, independent of requests.
The rest of the action types are for requests.



What happens when you pass a function into a dispatcher?

when we invoke dispatch and pass in an fuction that function returns the action object and after that 
the dispatch function calls our reducer and passes  the current state and the action object!













*/