/*



What is Lifecycle Diagram / Phases ( Hooks )


== lifecycle means life of particuler component
== its like born of comopnent update of component and die or we can se unmoutoing
the component 
there are theree phases in every component lifecylce

first one Mounting: 
when a new component is created and inserted into the DOM or, in other words, when the life of a 
component begins. This can only happen once, and is often called “initial render.”
Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the 
DOM).
 This method is called just before a component mounts on the DOM or the render method is called.
  After this method, the component gets mounted.
render phase :
its goes to function and returning output

commit phase: whaterver render pushesh to the dom and user can see the changes.
update dom;

useefect:  it calls afetr rendering like some sideeffect 



Update:  when there is some changes in props or state it trigers the update phase
in every update cleanup get calls and after that useeffect get callback


unmount phase:  it calls cleanup 











Explain how lists work in React?

Lists are used to display data in an ordered format and mainly used to display menus on websites. 
In React, Lists can be created in a similar way as we create lists in JavaScript.

The same as we do in JavaScript:

const names = [....];

const listOfNames = () => {

const listItems = names.map((name) =>

<li key={name}>

{name}

</li>

);

return (

<ul> {listItems}</ul>

);

}



What is Virtual DOM?  and how it works?

The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in 
memory and synced with the "real" DOM. It's a step that happens between the render function being called 
and the displaying of elements on the screen. This entire process is called reconciliation.
The Virtual DOM works in three simple steps.

Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
Then the difference between the previous DOM representation and the new one is calculated.
Once the calculations are done, the real DOM will be updated with only the things that have actually changed.





what is key?
A key is a special string attribute you should include when creating arrays of elements. Key prop helps 
React identify which items have changed, are added, or are removed.

Keys should be unique among its siblings. Most often we use ID from our data as key:

const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);



what is memorization in react?
memoization is an optimization technique that makes applications more efficient and  faster
A cache is simply a temporary data store that holds data so that future requests for that data 
can be served faster.
it checks if function return same value or not if yes then it retunr value from cache without 
computing again
it does this by storing computation results in cache, and retrieving that same information from the 
cache the next time it's needed instead of computing it again.


that can help speed up our code, especially when dealing with repetitive and heavy computing functions.










*/