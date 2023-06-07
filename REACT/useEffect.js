 /*


WHAT IS USEEFFECT IN REACT?

The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are:
 fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument
  is optional. useEffect(<function>, <dependency>)

The return function is the cleanup function, or when the user leaves the page and the 
component will unmount. 
By using this Hook, you tell React that your component needs to do something after render


Effect Cleanup
Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.




import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

 */