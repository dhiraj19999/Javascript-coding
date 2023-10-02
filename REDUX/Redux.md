/*





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
  when we invoke dispatch and pass in an action object,
 the dispatch function calls our reducer and passes in the current state and the action object!


what is reducer?

Reducers are functions that take the current state and an action as arguments, and return a new state result. 
In other words, (state, action) => newState


========<      DAY 2   =======>


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











///   DAY ===>  3







What are the properties of a store?
A store is an immutable object tree in Redux. A store is a state container which holds
 the application’s state. Redux can have only a single store in your application. Whenever a store is 
 created in Redux, you need to specify the reducer.

 A store has three important methods as given below −

getState
It helps you retrieve the current state of your Redux store.

The syntax for getState is as follows −

store.getState()
dispatch
It allows you to dispatch an action to change a state in your application.

The syntax for dispatch is as follows −

store.dispatch({type:'ITEMS_REQUEST'})
subscribe
It helps you register a callback that Redux store will call when an action has been dispatched. 
As soon as the Redux state has been updated, the view will re-render automatically.

The syntax for dispatch is as follows −

store.subscribe(()=>{ console.log(store.getState());})




where do dispatchers come from redux?
dispatcher is comes from store object it is a just method of store object








Explain redux to a 5 year old?


Consider someone who has given you a task to get some money out of a bank. The intention ( action ) 
you have in your mind is to withdraw money from the bank. In JavaScript, we can represent it as 
WITHDRAW_MONEY. The first step when you enter the bank is to talk to a cashier and ask them to get your 
money out of the safe. You never just go to a bank and just went straight to the safe, get your money, and 
left. 

Redux Store ( Bank )
The money bank kept is in the vault. The analogy of money is related to the state of the application.
 You can add more money or get some money out of the bank, similarly, the state can be updated with a new 
 value or you can reduce the value inside of a state.

money = state

Now consider the whole bank, it has the cashiers, computers, and all other stuff to make it operational.
 For the state to work properly, we have something called the store, which is like a bank in our case.

bank = store

The store holds the state and keeps it safe.

Redux principle #1:
Have a single source of truth: The state of your whole application is stored in an object tree within a 
single Redux store.

In simple language, the application state is stored in a single object managed by the Redux store.

Actions
Action in the real world can be defined as a process of doing something. So in order to update anything in
 your state, we need to act on something. In our bank example, we need to act by talking to a cashier and ask
  them to release our money.

Redux principle #2
state is read only:

The only way to change the state is to emit an action, an object-describing what happened.

In Redux, we can define our action by an object.

the below is an action object ( simply called action):

{
   type : "WITHDRAW_MONEY",
   amount : "1000"
}
The action object always has a type field that describes the action you want to perform. In our case, it is
 WITHDRAW_MONEY.

And always remember the following line as well:

Whenever you need to change or update the state of your Redux application, you need to dispatch an action.

Reducer ( cashier ):
As we discussed that there is no possible way of getting money directly from the bank and we have to talk to
 the cashier to get our money. In our case, the cashier is the reducer. It will go to the vault and get the
  money. The whole process is called dispatching an action.

Reducer ( cashier ) has the knowledge of how to update the state ( get the money ) and ensure states get
 updated ( you get the money ). Reducers will always return to the new state.

Redux principle #3
To specify how the state tree is transformed, you write pure reducers.

To understand that, to update the state of your application (like you do with setState updater function in
     React) your actions must always be sent off (dispatched) to the reducers to get your new state.









What is the difference between Context API and Redux?

Requires minimal Setup
Requires extensive setup to integrate it with a React Application
Adding new contexts requires creation from scratch
Easily extendible due to the ease of adding new data/actions after the initial setup
Debugging can be hard in highly nested React Component Structure even with Dev Tool
Incredibly powerful Redux Dev Tools to ease debugging
UI logic and State Management Logic are in the same component
Better code organization with separate UI logic and State Management Logic



       =======<   DAY4 ========>




What are redux thunks? 
Redux Thunk is a middleware that lets you call action creators that return a function instead of an 
action object.
This allows for delayed actions, including working with promises. One of the main use cases for this
 middleware is for handling actions that might not be synchronous, for example, using axios to send a 
 GET request.






What Is Redux Middleware? Redux Middleware allows you to intercept every action sent to the reducer so you 
can make changes to the action or cancel the action. Middleware helps you with logging, error reporting, 
making asynchronous requests, and a whole lot more.



What is useSelector? 

it is hook  useSelector() ​ Allows you to extract data from the Redux store state, using a selector function

It takes in a function argument that returns the part of the state that you want.


What is the compareFn that you pass in a useSelector?

The useSelector hook takes a selector function to select data from the store and another function equalityFn 
to compare them before returning the results and determine when to render if the data from the previous and 
current state are different

import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch, shallowEqual } from "react-redux";
import { createStore } from "redux";
function count(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(count);
function App() {
  const count = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <p>{count}</p>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);




What is useDispatch? 


usedipatch is an redux hook which we use to send an action to reducer or we can send function
which will return action to reducer


what is the use of provider in react-redux

The <Provider> component makes the Redux store available to any nested components that need to access the 
Redux store





what is redux tool kit? How does it make redux better?


Redux Toolkit is our official, opinionated, batteries-included toolset for efficient Redux development. 
It is intended to be the standard way to write Redux logic, and we strongly recommend that you use it.
Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our

recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write
 simpler code. Redux Toolkit is beneficial to all Redux users regardless of skill level or experience.










*/