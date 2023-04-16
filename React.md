/*

(1)  what is jsx?

In JSX rather than writing React.createElement we write plane HTML inside our JS itself. 

```jsx
function App(){
    return (<div style={{width:"500px",height:"300px",border:"3px solid green"}}>
        <div style={{width:"300px",height:"200px",border:"3px solid pink"}}>
        
        </div>
    </div>)
}
```

This makes our code much more readable and removes unnecessary complexity. Now is this a feature of React to be 
able to write JSX? So the answer is No. There are tools like babel which converts our JSX code to simple React.createElement code.

So Babel will convert our above JSX code to React.createElement code and then it is rendered in the webpage.




What is the difference between State and Props?

In React, both state and props are are plain JavaScript objects  state is managed by the component itself and can be updated using the setState() function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. Changes in the state trigger a re-render of the component and its children. props (short for "properties") are passed to a component by its parent component and are read-only, meaning that they cannot be modified by the component itself. props can be used to configure the behavior of a component and to pass data between components.


what is conditional rendring?

Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In React, it allows us to render different elements or components based on a condition. This concept is applied often in the following scenarios: Rendering external data from an API.











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






How does Class Components work?

### How to create a class component

It is pretty basic as the functional component, the component should start with an upper case character only.

Look at the below code to see how to create a class component:

```jsx
import React from "react";

class Product extends React.componet{
	render(){
		return(
			<div>
				<h1>This is a Product Component.</h1>
			</div>
		)
	}
}

export default Product;
```

**class components** basically extends from **React.component**, creating an inheritance. The component also contains a **render()** method, which basically return HTML.



### State change in class components

The properties of class component should be kept in an object called as **state.** The state should be initiated in a **constructor function** which will be present inside the class component itself. Look at the below to see how it is achieved.

```jsx
import React from "react";

class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Shampoo",
            price:200,
            show:false
        };
    }
    render(){
        return (
            <div>
                <h1>This is a product component.</h1>
                <h3>Name: {this.state.name}</h3>
                <h3>Price: {this.state.price}</h3>
            </div>
        )
    }
}

export default Product;
```

**super()** is used inside the **constructor function** so that your component can access all the **methods of the parent component as well.**

If you want to **access the properties** of the component you have to use **this** keyword for it.

Now, to **change the state** of a component let us consider a button element as well which will update the state of the application, **this button is going to update the price of the shampoo by 10 every-time we click on it.** This will be made possible by using **onClick.** 

In Order to update the state we will use **setState()** method, have a look at the following code to understand it in a better way.

```jsx
import React from "react";

class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Shampoo",
            price:200,
            show:false
        };
    }
    render(){
        return (
            <div>
                <h1>This is a product component.</h1>
                <h3>Name: {this.state.name}</h3>
                <h3>Price: {this.state.price}</h3>
                <button onClick={()=>{
                    this.setState({price:this.state.price+10});
                }}>Increase by 10</button>
            </div>
        )
    }
}

export default Product;
```


Now, let us take it a step further and let us have a look at **conditional rendering** by using the **show** property inside the **state object**.

Let us take one more **button**, which will **update the show flag** when clicked on it, which will ultimately be responsible for **conditional rendering**. This will also be possible by using **onClick** for firing the event and **setState()** method to update the property inside the **state object**.

import React from "react";

class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Shampoo",
            price:200,
            show:false
        };
    }
    render(){
        return (
            <div>
                <h1>This is a product component.</h1>
                <h3>Name: {this.state.name}</h3>
                <h3>Price: {this.state.price}</h3>
                <button onClick={()=>{
                    this.setState({price:this.state.price+10});
                }}>Increase by 10</button>
                <button onClick={()=>{
                    this.setState({show:!this.state.show});
                }}>{this.state.show?"Not Clicked":"Clicked"}</button>
                <h2>{this.state.show?"clicked":"Unclicked"}</h2>
            </div>
        )
    }
}

export default Product;















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






What is the difference between react.memo and react.useMemo?


React.memo is a higher order component.
If your component renders the same result given the same props, you can wrap it in a call to React.memo for
 a performance boost in some cases by memoizing the result. This means that React will skip rendering the
  component, and reuse the last rendered result.

React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState or
 useContext Hook in its implementation, it will still rerender when state or context change.

By default it will only shallowly compare complex objects in the props object. If you want control over the
 comparison, you can also provide a custom comparison function as the second argument.
 function MyComponent(props) {
  /* render using props */

/*



function MyComponent(props) {
  /* render using props */
/*}
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
//}
//export default React.memo(MyComponent, areEqual);










*/





  











*/