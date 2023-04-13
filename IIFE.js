




/*

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it
 is defined.

Do not create unnecessary global variables and functions. Functions and variables defined in IIFE do not 
conflict with other functions & variables even if they have same name. Organize JavaScript code.
Developers primarily use this pattern to ensure variables are only accessible within the scope of the defined 
function.
(function() {
    // Code that runs in your function
})()










fetch vs axios?
Axios is a stand-alone third party package that can be easily installed.
Fetch is built into most modern browsers; no installation is required as such.
Axios’ data contains the object.
Fetch’s body has to be stringified.
Axios request is ok when status is 200 and statusText is ‘OK’.
Fetch request is ok when response object contains the ok property.
Axios performs automatic transforms of JSON data.
Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the 
.json() method on the response.
Axios uses the data property.
Fetch uses the body property.



strict mode?

The "use strict" directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

*/